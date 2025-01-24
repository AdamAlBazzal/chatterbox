"use client";

import { useActionState } from "react";
import React from "react";
import { login } from "../auth/actions";
import Image from "next/image";

const initialState = {
  message: "",
};

const LoginForm = () => {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form className="font-sans" action={formAction}>
      <input
        type="text"
        name="username"
        placeholder="name@gmail.com"
        className=" bg-primary self-center text-white w-[100%] min-[375px]:w-[98%] min-[425px]:w-[96%] md:w-[95%] border border-l-0 border-b-0 rounded-l-none  border-white rounded-full text-center px-2 py-2 focus:outline-none"
      />
      <div className="flex gap-1 bg-primary w-[90%] min-[375px]:w-[90%] md:w-[89%] text-white self-center rounded-full text-center border  rounded-r-none border-r-0 px-2 py-2  focus:outline-none">
        <Image src="/lock.svg" width={25} height={25} alt="lock image" />
        <input
          name="password"
          type="password"
          placeholder="*****"
          className="bg-primary text-center placeholder:text-center flex-grow w-5/6 placeholder:text-gray-300 focus:outline-none"
        />
      </div>

      <input
        type="submit"
        name="submit"
        value="Submit"
        className=" bg-primary self-center text-white w-[100%] min-[375px]:w-[98%] min-[425px]:w-[96%] md:w-[95%] border border-l-0 border-t-0 rounded-l-none  border-white rounded-full text-center px-2 py-2 focus:outline-none"
      />
    </form>
  );
};

export default LoginForm;
