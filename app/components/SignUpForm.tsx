"use client";
import { useActionState } from "react";
import React from "react";
import Link from "next/link";
import { register } from "../auth/actions";
import { z } from "zod";

const initialState = {
  message: "",
};

export const SignupFormSchema = z.object({
  username: z
    .string({
      required_error: "Username is required.",
    })
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
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

const SignUpForm = () => {
  const [state, formAction, pending] = useActionState(register, initialState);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-5  justify-center">
        <div className="self-center m-auto w-[80%] md:w-[75%] flex flex-col justify-center">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="bg-primary text-white w-[100%] min-[375px]:w-[98%] min-[425px]:w-[96%] md:w-[95%] border border-b-0 border-l-0 rounded-l-none  border-white rounded-full text-center px-2 py-2  focus:outline-none"
          />

          <input
            type="text"
            name="username"
            placeholder="name@gmail.com"
            className="flex gap-1 bg-primary w-[90%] min-[375px]:w-[90%] md:w-[89%] text-white rounded-full text-center border  rounded-r-none border-r-0 px-2 py-2  focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="*****"
            className="flex gap-1 bg-primary w-[100%] min-[375px]:w-[98%] min-[425px]:w-[96%] md:w-[95%] text-white border-b-0 rounded-full text-center border  rounded-l-none border-l-0 border-t-0 px-2 py-2  focus:outline-none"
          />

          <div className="flex gap-1 justify-center bg-primary w-[90%] min-[375px]:w-[90%] md:w-[89%] text-white rounded-full text-center border  rounded-r-none border-r-0 px-2 py-2  focus:outline-none">
            <input
              type="password"
              placeholder="*****"
              className="self-center text-center w-3/4 bg-transparent focus:outline-none"
            />
          </div>

          <input
            type="submit"
            name="submit"
            className=" bg-primary text-white w-[100%] min-[375px]:w-[98%] min-[425px]:w-[96%] md:w-[95%] border border-l-0 border-t-0 rounded-l-none  border-white rounded-full text-center px-2 py-2 focus:outline-none"
            value="Submit"
          />
          <p aria-live="polite">{state?.message}</p>
        </div>
        <Link
          href="/auth/login"
          className="self-center bg-primary text-center border rounded-full text-white p-2 w-11/12"
        >
          Have Account ?
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
