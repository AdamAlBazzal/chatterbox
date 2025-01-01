import React from "react";
interface Props {
  customStyle?: string;
  text: string;
}
const AuthBtn = ({ customStyle, text }: Props) => {
  return (
    <button
      className={
        !customStyle
          ? " bg-accent self-center text-white w-[95%] border border-l-0 border-t-0 rounded-l-none  border-white rounded-full text-center px-2 py-2 focus:outline-none"
          : customStyle
      }
    >
      {text}
    </button>
  );
};

export default AuthBtn;
