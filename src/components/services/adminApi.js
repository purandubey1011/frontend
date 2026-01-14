import axios from "axios";

const API = axios.create({
  baseURL: "https://unyfer-backend.onrender.com/api/v1/form",
  // baseURL: "http://localhost:3000/api/v1/form",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Public Form APIs
export const submitContactForm = (data) => API.post("/contact", data);
export const submitApplyForm = (data) => API.post("/apply", data);

// 🔹 Admin APIs
export const fetchApplications = () => API.get("/admin/applications");
export const fetchContacts = () => API.get("/admin/contacts");

export default API;
