import API from "./api";

export const getUsers = () => API.get("/users");

export const addUser = (user) => API.post("/users", user);

export const updateUser = (id, user) =>
    API.put(`/users/${id}`, user);

export const deleteUser = (id) =>
    API.delete(`/users/${id}`);