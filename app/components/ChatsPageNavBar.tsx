import React from "react";
import SearchBtn from "./SearchBtn";
import MoreBtn from "./MoreBtn";

const ChatsPageNavBar = () => {
  return (
    <nav>
      <div className="bg-primary p-4 flex justify-between">
        <div>Chatter Box</div>
        <div className="flex gap-x-5">
          <SearchBtn />
          <MoreBtn />
        </div>
      </div>
    </nav>
  );
};

export default ChatsPageNavBar;
