"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAccounts() {
  let json;
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("AUTH_TOKEN")?.value;

    if (!token) {
      throw new Error("Authentication token is missing");
    }

    const response = await fetch(process.env.BASE_URL + "/api/v1/accounts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return redirect("/auth/login");
    }

    json = await response.json();
    return json.data;
  } catch (err) {
    // setError(err.message);
    return redirect("/auth/login");
  }
}
