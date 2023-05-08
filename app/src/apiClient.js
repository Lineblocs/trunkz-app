import axios from "axios";

var API_BASE_URL = "https://lineblocs.com/api/public/";
const api = axios.create({
 baseURL: process.env.API_BASE_URL || API_BASE_URL
});

export default api;