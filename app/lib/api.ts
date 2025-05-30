export async function apiRequest(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
) {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "API request failed");
  }

  return await res.json();
}