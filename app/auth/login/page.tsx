import Link from "next/link";
import Image from "next/image";
import Form from "next/form";
import LoginForm from "@/app/components/LoginForm";

const loginPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen px-5 sm:px-0">
      <div className="self-center  border-0 rounded-lg h-3/4 text-sm  max-w-md  max-h-fit bg-primary px-9 py-6 flex flex-col flex-grow gap-5 ">
        <h1 className="text-center text-xl lg:text-4xl font-heading text-secondary">
          Login
        </h1>

        <LoginForm />

        <button className="self-center bg-primary text-center  text-accent">
          Forgot
        </button>

        <p className="text-secondary text-sm tracking-wide">
          Join Us !&nbsp;
          <Link
            href="/auth/signup"
            className="self-center bg-primary text-center text-accent"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default loginPage;
