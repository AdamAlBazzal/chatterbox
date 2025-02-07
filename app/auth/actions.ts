"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SafeParseReturnType, z } from "zod";
import { convertZodErrors } from "../_utils/errors";

const SignupFormSchema = z
  .object({
    email: z
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
    fullName: z.string().min(3, { message: "Full name is required." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password is required." }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });

      return z.NEVER;
    }
  });
const LoginFormSchema = z.object({
  email: z
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
});

export const signUp = async (
  prevState: AccountFormState,
  formData: FormData
): Promise<AccountFormState> => {
  try {
    const unvalidatedAccount: Partial<Account> = {
      email: formData.get("username")?.toString(),
      password: formData.get("password")?.toString(),
      fullName: formData.get("fullName")?.toString(),
      confirmPassword: formData.get("confirmPassword")?.toString(),
    };

    const validatedAccount: SafeParseReturnType<Account, Account> =
      SignupFormSchema.safeParse(unvalidatedAccount);

    if (!validatedAccount.success) {
      const errors = convertZodErrors(validatedAccount.error);
      return { errors };
    }

    const response = await fetch(process.env.BASE_URL + "/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: validatedAccount.data.email,
        password: validatedAccount.data.password,
        fullName: validatedAccount.data.fullName,
        email: validatedAccount.data.email,
      }),
    });

    const json = await response.json();

    if (!json.status.success) {
      throw new Error(json.status.message);
    }

    return {
      successMessage: "account added successfully",
      errors: {},
    };
  } catch (err) {
    // setError(err.message);
    // return { successMessage: err.message };
  }
  redirect("/chats");
};

export async function login(
  prevState: any,
  formData: FormData
): Promise<AccountFormState> {
  try {
    const unvalidatedAccount: Partial<Account> = {
      email: formData.get("username")?.toString(),
      password: formData.get("password")?.toString(),
    };

    const validatedAccount: SafeParseReturnType<
      Partial<Account>,
      Partial<Account>
    > = LoginFormSchema.safeParse(unvalidatedAccount);

    if (!validatedAccount.success) {
      const errors = convertZodErrors(validatedAccount.error);
      return { errors };
    }

    const response = await fetch(process.env.BASE_URL + "/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: validatedAccount.data.email,
        password: validatedAccount.data.password,
      }),
    });

    const json = await response.json();

    if (!json.status.success) {
      return { successMessage: json.status.message };
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
