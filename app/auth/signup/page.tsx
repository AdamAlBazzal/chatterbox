import React from "react";
import SignUpForm from "@/app/components/SignUpForm";

const signUpPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen px-5 sm:px-0">
      <div className="self-center  border-0 rounded-lg h-3/4 text-sm  max-w-md  max-h-fit bg-primary px-6 py-6 flex flex-col flex-grow gap-10 ">
        <h1 className="text-center text-xl lg:text-4xl font-heading">
          Sign Up
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default signUpPage;
