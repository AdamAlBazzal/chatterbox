import React from "react";
import Image from "next/image";
import MoreBtn from "./MoreBtn";
import BackBtn from "./BackBtn";
const ChatDetailPageNavBar = () => {
  return (
    <div className="sticky top-0 bg-primary left-0 w-full">
      <div className="p-4 flex justify-between">
        <div className="flex flex-row">
          <div className="self-center">
            <BackBtn />
          </div>
          <div className="flex gap-2">
            <div>
              <Image
                src="/profile.png"
                width={40}
                height={40}
                alt="profile btn"
              />
            </div>
            <div>Adam AlBazzal</div>
          </div>
        </div>
        <div className="self-center">
          <MoreBtn />
        </div>
      </div>
    </div>
  );
};

export default ChatDetailPageNavBar;
