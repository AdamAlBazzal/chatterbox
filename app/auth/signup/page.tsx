import React from "react";
import SignUpForm from "@/app/components/SignUpForm";
import Link from "next/link";
const signUpPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="self-center  border-0 rounded-lg h-3/4 text-sm  max-w-md  max-h-fit bg-primary px-9 py-6 flex flex-col flex-grow gap-5 ">
        <h1 className="text-center text-xl lg:text-4xl font-heading text-secondary">
          Sign up
        </h1>
        <SignUpForm />
        <p className="text-secondary text-sm tracking-wide">
          Have account ?&nbsp;
          <Link
            href="/auth/login"
            className="self-center bg-primary text-center text-accent"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default signUpPage;
