import React from "react";
import ChatListItem from "./ChatListItem";
import Link from "next/link";
import { AccountDTO } from "../dto/AccountDto";

interface Props {
  accountList: AccountDTO[];
}

const ChatList = ({ accountList }: Props) => {
  return (
    <Link href="/chats/item">
      <div className="p-4">
        {accountList.map((account: AccountDTO) => (
          <ChatListItem account={account} key={account.username} />
        ))}
      </div>
    </Link>
  );
};

export default ChatList;
