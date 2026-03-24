import axios from "axios";
import { clearAdminSession, getAdminToken } from "./adminSession";

const API_ROOT =
  import.meta.env.VITE_API_ROOT ||
  (import.meta.env.DEV
    ? "http://localhost:3000/api/v1"
    : "https://unyfer-backend.onrender.com/api/v1");

const createJsonClient = (baseURL) =>
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

const attachAdminAuth = (client) => {
  client.interceptors.request.use((config) => {
    const token = getAdminToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        clearAdminSession();

        if (window.location.pathname.startsWith("/admin")) {
          window.location.href = "/admin/login";
        }
      }

      return Promise.reject(error);
    }
  );
};

const FORM_API = createJsonClient(`${API_ROOT}/form`);
const DOWNLOAD_API = createJsonClient(`${API_ROOT}/download`);
const AUTH_API = createJsonClient(`${API_ROOT}/admin/auth`);
const ADMIN_FORM_API = createJsonClient(`${API_ROOT}/form`);
const ADMIN_DOWNLOAD_API = createJsonClient(`${API_ROOT}/download`);

attachAdminAuth(ADMIN_FORM_API);
attachAdminAuth(ADMIN_DOWNLOAD_API);
attachAdminAuth(AUTH_API);

// Public APIs
export const submitContactForm = (data) => FORM_API.post("/contact", data);
export const submitApplyForm = (data) => FORM_API.post("/apply", data);
export const submitDownloadForm = (data) => DOWNLOAD_API.post("/", data);

// Admin auth
export const loginAdmin = (data) => AUTH_API.post("/login", data);
export const fetchAdminSession = () => AUTH_API.get("/session");

// Admin data
export const fetchApplications = () => ADMIN_FORM_API.get("/admin/applications");
export const fetchDownloads = () => ADMIN_DOWNLOAD_API.get("/admin/downloads");
export const fetchContacts = () => ADMIN_FORM_API.get("/admin/contacts");

// Zoho Campaign APIs
export const fetchZohoLists = () => ADMIN_FORM_API.get("/admin/zoho/lists");
export const createZohoCampaign = (data) => ADMIN_FORM_API.post("/admin/zoho/campaigns", data);
export const sendZohoCampaign = (campaignKey, data = {}) =>
  ADMIN_FORM_API.post(`/admin/zoho/campaigns/${campaignKey}/send`, data);

export default FORM_API;
