import React from "react";
import Image from "next/image";
const SearchBtn = () => {
  return (
    <button className="focus:outline-none">
      <Image src="/search.png" width={20} height={20} alt="more btn" />
    </button>
  );
};

export default SearchBtn;
