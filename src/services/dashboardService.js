import API from "./api";

export const getDashboard = (userId) =>
    API.get(`/dashboard/${userId}`);