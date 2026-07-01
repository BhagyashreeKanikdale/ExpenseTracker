import API from "./api";

export const getIncome = (userId) =>
    API.get(`/income/${userId}`);

export const addIncome = (income) =>
    API.post("/income", income);

export const updateIncome = (id, income) =>
    API.put(`/income/${id}`, income);

export const deleteIncome = (id) =>
    API.delete(`/income/${id}`);