import React from "react";
interface Props {
  width: number;
  text: string;
}
const AccentOutlineBtn = ({ width, text }: Props) => {
  return <div>{text}</div>;
};

export default AccentOutlineBtn;
