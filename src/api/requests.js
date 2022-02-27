import axiosInstance from "api/config";

export const getAllUsers = () => axiosInstance.get("/users")
export const getOneUser = (userId) => axiosInstance.get(`/users?id=${userId}`)

export const getPostByUser = (userId) => axiosInstance.get(`/posts?userId=${userId}`)
export const getCommentsByPost = (postId) => axiosInstance.get(`/comments?postId=${postId}`)

