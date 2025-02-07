"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      name="submit"
      className=" w-full bg-accent text-primary-light text-center px-2 py-2 focus:outline-none cursor-pointer"
    >
      {pending ? "Loading..." : "Submit"}
    </button>
  );
};

export default SubmitButton;
