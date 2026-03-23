import axios from "axios";

const API = axios.create({
  baseURL: "https://unyfer-backend.onrender.com/api/v1/form",
  // baseURL: "http://localhost:3000/api/v1/form",
  headers: {
    "Content-Type": "application/json",
  },
});

// Public Form APIs
export const submitContactForm = (data) => API.post("/contact", data);
export const submitApplyForm = (data) => API.post("/apply", data);

// Admin APIs
export const fetchApplications = () => API.get("/admin/applications");
export const fetchContacts = () => API.get("/admin/contacts");

// Zoho Campaign APIs
export const fetchZohoLists = () => API.get("/admin/zoho/lists");
export const createZohoCampaign = (data) => API.post("/admin/zoho/campaigns", data);
export const sendZohoCampaign = (campaignKey, data = {}) =>
  API.post(`/admin/zoho/campaigns/${campaignKey}/send`, data);

export default API;
