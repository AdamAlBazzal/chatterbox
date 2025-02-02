"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { signUp } from "../auth/actions";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

const SignUpForm = () => {
  const [state, formAction] = useActionState(signUp, initialState);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-5 justify-center">
        <div className=" flex flex-col justify-center gap-3">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="fullNameField"
              className="blocktext-sm text-secondary font-medium "
            >
              Full name
            </label>
            <input
              type="text"
              id="fullNameField"
              aria-describedby="helper-text-explanation"
              className="bg-transparent  border-2 border-gray-300 text-gray-900 dark:text-primary-light text-sm focus:border-accent focus:outline-none  block w-full p-2.5 "
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email-icon"
              className="block text-sm text-secondary font-medium"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="email-icon"
                name="username"
                placeholder="john@mail.com"
                className="bg-transparent  border-2 dark:text-primary-light  border-gray-300 text-gray-900 text-sm block w-full ps-10 p-2.5 focus:border-accent focus:outline-none   "
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password-icon"
              className="block text-sm text-secondary font-medium"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      opacity="0.5"
                      d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                      fill="var(--svg-fill-color)"
                    ></path>{" "}
                    <path
                      d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.4453 2.75 16.5018 4.42242 17.0846 6.68694C17.1879 7.08808 17.5968 7.32957 17.9979 7.22633C18.3991 7.12308 18.6405 6.7142 18.5373 6.31306C17.788 3.4019 15.1463 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z"
                      fill="var(--svg-fill-color)"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <input
                type="password"
                id="password-icon"
                name="password"
                className="bg-transparent dark:text-primary-light  border-2 border-gray-300 text-gray-900 text-sm block w-full ps-10 p-2.5 focus:border-accent focus:outline-none   "
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirm-password-icon"
              className="block text-sm font-medium text-secondary"
            >
              Confirm password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      opacity="0.5"
                      d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                      fill="var(--svg-fill-color)"
                    ></path>{" "}
                    <path
                      d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.4453 2.75 16.5018 4.42242 17.0846 6.68694C17.1879 7.08808 17.5968 7.32957 17.9979 7.22633C18.3991 7.12308 18.6405 6.7142 18.5373 6.31306C17.788 3.4019 15.1463 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z"
                      fill="var(--svg-fill-color)"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <input
                type="password"
                id="confirm-password-icon"
                name="confirmPassword"
                className="bg-transparent border-2 dark:text-primary-light border-gray-300 text-gray-900 text-sm block w-full ps-10 p-2.5 focus:border-accent focus:outline-none  "
              />
            </div>
          </div>

          <div>
            <input
              type="submit"
              name="submit"
              className=" w-full bg-accent text-primary-light text-center px-2 py-2 focus:outline-none cursor-pointer"
              value="Submit"
            />
          </div>
          <p aria-live="polite">{}</p>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
