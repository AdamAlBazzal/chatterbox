"use server";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";

export async function register(prevState: any, formData: FormData) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    const fullName = formData.get("fullName");

    const response = await fetch(process.env.BASE_URL + "/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        fullName,
        email: username,
      }),
    });

    const json = await response.json();

    if (!json.status.success) {
      return { message: json.status.message };
    }
  } catch (err) {
    // setError(err.message);
    return redirect("/error");
  }
  redirect("/chats");
}

export async function login(prevState: any, formData: FormData) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await fetch(process.env.BASE_URL + "/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const json = await response.json();

    if (!json.status.success) {
      return { message: json.status.message };
    }

    const cookieStore = await cookies();

    cookieStore.set({
      name: "AUTH_TOKEN",
      value: json.status.token,
      httpOnly: true,
      path: "/",
    });
  } catch (err) {
    // setError(err.message);
    return redirect("/error");
  }
  redirect("/chats");
}
