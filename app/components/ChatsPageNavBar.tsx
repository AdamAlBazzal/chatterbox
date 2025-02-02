"use client";

import SearchBtn from "./SearchBtn";
import Image from "next/image";
import ContextMenu from "./ContextMenu";
import { useState } from "react";
import MoreBtn from "./MoreBtn";

const ChatsPageNavBar = () => {
  const [contextMenuIsVisible, setContextMenuIsVisible] = useState(false);
  return (
    <nav>
      <div className="bg-primary p-4 flex justify-between shadow-md shadow-slate-600">
        <div>Chatter Box</div>
        <div className="flex gap-x-5">
          <SearchBtn />
          <MoreBtn
            onClick={() => {
              setContextMenuIsVisible(true);
            }}
          />

          <ContextMenu
            show={contextMenuIsVisible}
            onClickOutside={() => setContextMenuIsVisible(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default ChatsPageNavBar;
