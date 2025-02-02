"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const SignupFormSchema = z.object({
  username: z
    .string({
      required_error: "Username is required.",
    })
    .email({ message: "Please enter a valid email." })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
  fullName: z.string(),
});

export async function signUp(prevState: any, formData: FormData) {
  try {
    const unvalidatedAccount = {
      username: formData.get("username"),
      password: formData.get("password"),
      fullName: formData.get("fullName"),
    };

    const validatedAccount = SignupFormSchema.safeParse(unvalidatedAccount);

    if (!validatedAccount.success) {
      return {};
    } else {
      return {
        message: "account added successfully",
      };
    }

    // const response = await fetch(process.env.BASE_URL + "/api/v1/auth/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //     fullName,
    //     email: username,
    //   }),
    // });

    // const json = await response.json();

    // if (!json.status.success) {
    //   throw new Error(json.status.message);
    // }
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errorMessages = err.errors.map(
        (error) => `Validation error for ${error.path[0]}: ${error.message}`
      );

      return errorMessages;
    } else if (err instanceof Error) {
      const errorMessages = [
        {
          message: err.message,
        },
      ];

      return errorMessages;
    } else {
      // Return a generic message if the error is neither a ZodError nor a standard Error
      return ["Unexpected error occurred"];
    }
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
export async function logout() {
  try {
    const cookieStore = await cookies();

    cookieStore.delete({
      name: "AUTH_TOKEN",
    });
  } catch (err) {
    return redirect("/error");
  }
}
