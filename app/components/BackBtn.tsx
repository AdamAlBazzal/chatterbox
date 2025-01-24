"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const BackBtn = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <Image src="/back.png" width={25} height={25} alt="back btn" />
    </button>
  );
};
export default BackBtn;
