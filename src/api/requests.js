import axiosInstance from "api/config";

export const getAllUsers = () => axiosInstance.get("/users")
export const getOneUser = (userId) => axiosInstance.get(`/users?id=${userId}`)