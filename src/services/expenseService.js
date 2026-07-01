import API from "./api";

export const getExpenses = (userId) =>
    API.get(`/expenses/${userId}`);

export const addExpense = (expense) =>
    API.post("/expenses", expense);

export const updateExpense = (id, expense) =>
    API.put(`/expenses/${id}`, expense);

export const deleteExpense = (id) =>
    API.delete(`/expenses/${id}`);