import { headers } from 'next/headers';
// lib/api.ts
import axios from "axios";
// 👇 dynamic base
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000", // 👈 dynamic base
  withCredentials: true,

});

// 👇 dynamic base

export async function apiRequest(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any,
  headers?: Record<string, string>

) {
  try {
    const res = await axiosInstance({ url, method, data,headers });
    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "API request failed");
  }
}

export default axiosInstance;