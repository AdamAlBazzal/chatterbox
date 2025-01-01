import React from "react";
import ChatListItem from "./ChatListItem";
import Link from "next/link";

const ChatList = () => {
  return (
    <Link href="/chats/item">
      <div className="p-4">
        <ChatListItem />
      </div>
    </Link>
  );
};

export default ChatList;
