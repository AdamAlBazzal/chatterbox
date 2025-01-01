import React from "react";
import Image from "next/image";
const ChatListItem = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-row gap-5">
        <span className="self-center">
          <Image src="/profile.png" width={40} height={40} alt="profile btn" />
        </span>
        <div className="flex flex-col">
          <div>Adam AlBazzal</div>
          <div className="text-xs text-secondary font-semibold">Hello</div>
        </div>
      </div>
      <div className="text-xs text-secondary font-semibold">26/3/2017</div>
    </div>
  );
};

export default ChatListItem;
