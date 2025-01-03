import React from "react";
import Image from "next/image";
interface Props {
  placeholder: string;
  style?: string;
  isPassword?: boolean;
  lockIsVisible?: boolean;
}
const AuthTextField = ({
  placeholder,
  style,
  isPassword = false,
  lockIsVisible = true,
}: Props) => {
  return (
    <div className={style}>
      {isPassword && lockIsVisible && (
        <Image src="/lock.svg" width={25} height={25} alt="lock image" />
      )}
      <input
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        className="bg-accent text-center placeholder:text-center flex-grow w-5/6 placeholder:text-gray-300 focus:outline-none"
      />
    </div>
  );
};

export default AuthTextField;
