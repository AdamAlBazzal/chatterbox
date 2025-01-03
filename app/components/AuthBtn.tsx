import React, { ReactElement, ReactNode } from "react";
interface Props {
  customStyle?: string;
  children: ReactNode;
}
const AuthBtn = ({ customStyle, children }: Props) => {
  return (
    <button
      className={
        !customStyle
          ? " bg-accent self-center text-white w-[100%] min-[375px]:w-[98%] min-[425px]:w-[96%] md:w-[95%] border border-l-0 border-t-0 rounded-l-none  border-white rounded-full text-center px-2 py-2 focus:outline-none"
          : customStyle
      }
    >
      {children}
    </button>
  );
};

export default AuthBtn;
