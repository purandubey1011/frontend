import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  createZohoCampaign,
  fetchZohoLists,
  sendZohoCampaign,
} from "../services/adminApi";

const tryParseJSON = (value) => {
  if (!value?.trim()) return undefined;
  try {
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("JSON must be an object");
    }
    return parsed;
  } catch {
    throw new Error("Invalid JSON in raw payload field");
  }
};

const extractListItems = (payload) => {
  const found = [];
  const stack = [payload];

  while (stack.length) {
    const current = stack.pop();
    if (!current) continue;

    if (Array.isArray(current)) {
      current.forEach((item) => stack.push(item));
      continue;
    }

    if (typeof current !== "object") continue;

    const listKey = current.listkey || current.listKey;
    const listName = current.listname || current.listName || current.name;
    if (listKey) {
      found.push({ listKey, listName: listName || listKey });
    }

    Object.values(current).forEach((value) => {
      if (typeof value === "object" && value !== null) {
        stack.push(value);
      }
    });
  }

  const unique = new Map();
  found.forEach((item) => {
    if (!unique.has(item.listKey)) {
      unique.set(item.listKey, item);
    }
  });

  return Array.from(unique.values());
};

const ZohoCampaign = () => {
  const [loadingLists, setLoadingLists] = useState(false);
  const [creating, setCreating] = useState(false);
  const [sending, setSending] = useState(false);

  const [listsResponse, setListsResponse] = useState(null);

  const [form, setForm] = useState({
    campaignName: "",
    subject: "",
    fromName: "",
    fromEmail: "",
    replyTo: "",
    listKey: "",
    htmlContent: "",
    rawPayload: "",
    sendImmediately: true,
  });

  const [existingCampaignKey, setExistingCampaignKey] = useState("");

  const listOptions = useMemo(() => extractListItems(listsResponse), [listsResponse]);

  const onChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const loadLists = async () => {
    try {
      setLoadingLists(true);
      const res = await fetchZohoLists();
      setListsResponse(res?.data?.data || null);
      toast.success("Zoho lists fetched");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to fetch Zoho lists");
    } finally {
      setLoadingLists(false);
    }
  };

  const handleCreateCampaign = async (e) => {
    e.preventDefault();

    try {
      setCreating(true);
      const rawPayload = tryParseJSON(form.rawPayload);

      const payload = {
        campaignName: form.campaignName,
        subject: form.subject,
        fromName: form.fromName,
        fromEmail: form.fromEmail,
        replyTo: form.replyTo,
        listKey: form.listKey,
        htmlContent: form.htmlContent,
        rawPayload,
      };

      const createRes = await createZohoCampaign(payload);
      const campaignKey = createRes?.data?.campaignKey;

      if (campaignKey) {
        setExistingCampaignKey(campaignKey);
      }

      if (form.sendImmediately && campaignKey) {
        setSending(true);
        await sendZohoCampaign(campaignKey);
        toast.success(`Campaign created and sent (${campaignKey})`);
      } else if (form.sendImmediately && !campaignKey) {
        toast.warning(
          "Campaign created, but no campaignKey returned. Use manual send with campaign key."
        );
      } else {
        toast.success("Campaign created");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || error.message || "Create campaign failed");
    } finally {
      setCreating(false);
      setSending(false);
    }
  };

  const handleSendExisting = async () => {
    if (!existingCampaignKey.trim()) {
      toast.error("Enter campaign key first");
      return;
    }

    try {
      setSending(true);
      await sendZohoCampaign(existingCampaignKey.trim());
      toast.success("Campaign send requested");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Send campaign failed");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Zoho Email Campaigns</h2>
          <p className="text-sm text-gray-500">Create and send Zoho campaigns from admin.</p>
        </div>

        <button
          type="button"
          onClick={loadLists}
          disabled={loadingLists}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition disabled:opacity-60"
        >
          {loadingLists ? "Loading lists..." : "Fetch Zoho Lists"}
        </button>
      </div>

      <form onSubmit={handleCreateCampaign} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            value={form.campaignName}
            onChange={(e) => onChange("campaignName", e.target.value)}
            placeholder="Campaign name"
            className="px-4 py-2 border rounded-lg"
            required
          />
          <input
            value={form.subject}
            onChange={(e) => onChange("subject", e.target.value)}
            placeholder="Email subject"
            className="px-4 py-2 border rounded-lg"
            required
          />
          <input
            value={form.fromName}
            onChange={(e) => onChange("fromName", e.target.value)}
            placeholder="From name"
            className="px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            value={form.fromEmail}
            onChange={(e) => onChange("fromEmail", e.target.value)}
            placeholder="From email"
            className="px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="email"
            value={form.replyTo}
            onChange={(e) => onChange("replyTo", e.target.value)}
            placeholder="Reply-to email"
            className="px-4 py-2 border rounded-lg"
            required
          />

          {listOptions.length > 0 ? (
            <select
              value={form.listKey}
              onChange={(e) => onChange("listKey", e.target.value)}
              className="px-4 py-2 border rounded-lg"
              required
            >
              <option value="">Select Zoho list</option>
              {listOptions.map((list) => (
                <option key={list.listKey} value={list.listKey}>
                  {list.listName} ({list.listKey})
                </option>
              ))}
            </select>
          ) : (
            <input
              value={form.listKey}
              onChange={(e) => onChange("listKey", e.target.value)}
              placeholder="Zoho list key"
              className="px-4 py-2 border rounded-lg"
              required
            />
          )}
        </div>

        <textarea
          value={form.htmlContent}
          onChange={(e) => onChange("htmlContent", e.target.value)}
          placeholder="HTML email content"
          className="w-full min-h-[180px] px-4 py-2 border rounded-lg"
          required
        />

        <textarea
          value={form.rawPayload}
          onChange={(e) => onChange("rawPayload", e.target.value)}
          placeholder='Optional Zoho raw payload overrides (JSON object), e.g. {"topic_id":"123"}'
          className="w-full min-h-[90px] px-4 py-2 border rounded-lg"
        />

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={form.sendImmediately}
            onChange={(e) => onChange("sendImmediately", e.target.checked)}
          />
          Send immediately after create (if campaign key is returned)
        </label>

        <button
          type="submit"
          disabled={creating || sending}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium disabled:opacity-60"
        >
          {creating ? "Creating..." : sending ? "Sending..." : "Create Campaign"}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">Send Existing Campaign</h3>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={existingCampaignKey}
            onChange={(e) => setExistingCampaignKey(e.target.value)}
            placeholder="Campaign key"
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button
            type="button"
            onClick={handleSendExisting}
            disabled={sending}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Campaign"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZohoCampaign;
