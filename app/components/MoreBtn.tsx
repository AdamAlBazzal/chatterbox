import React from "react";
import Image from "next/image";
const MoreBtn = () => {
  return (
    <button className="focus:outline-none flex">
      <Image
        className="self-center"
        src="/more.png"
        width={20}
        height={20}
        alt="more btn"
      />
    </button>
  );
};

export default MoreBtn;
