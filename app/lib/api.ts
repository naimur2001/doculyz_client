// lib/api.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000", // 👈 dynamic base
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


export async function apiRequest(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
) {
  try {
    const res = await axiosInstance({ url, method, data });
    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "API request failed");
  }
}

export default axiosInstance;