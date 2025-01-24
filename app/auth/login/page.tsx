import Link from "next/link";
import Image from "next/image";
import Form from "next/form";
import LoginForm from "@/app/components/LoginForm";

const loginPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen px-5 sm:px-0">
      <div className="self-center  border-0 rounded-lg h-3/4 text-sm  max-w-md  max-h-fit  bg-primary  px-6 py-6 flex flex-col flex-grow gap-10 ">
        <h1 className="text-center text-xl lg:text-4xl font-heading">Login</h1>

        <div className="flex flex-col gap-5  justify-center">
          <div className="self-center m-auto w-[80%] md:w-[75%] flex flex-col ">
            <LoginForm />
          </div>

          <button className="self-center bg-primary  border rounded-full text-white p-2 w-8/12">
            Forgot
          </button>
          <Link
            href="/auth/signup"
            className="self-center bg-primary border rounded-full text-center text-white p-2 w-11/12"
          >
            Join Us !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
