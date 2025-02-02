"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  onClick: () => void;
}

const MoreBtn = ({ onClick }: Props) => {
  return (
    <button className="focus:outline-none flex" onClick={onClick}>
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
