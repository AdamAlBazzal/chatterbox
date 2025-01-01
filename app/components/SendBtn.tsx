import React from "react";
import Image from "next/image";

const SendBtn = () => {
  return (
    <button className="p-2 text-gray-100 bg-primary border-0 rounded-full focus:outline-none">
      <Image src="/send.png" width={25} height={25} alt="send image" />
    </button>
  );
};

export default SendBtn;
