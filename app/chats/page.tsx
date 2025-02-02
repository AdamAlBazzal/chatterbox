import React from "react";
import Navbar from "../components/ChatsPageNavBar";
import Chatlist from "../components/ChatList";
import { getAccounts } from "./actions";
import { AccountDTO } from "../dto/AccountDto";

const chatList = async () => {
  const chatData = await getAccounts();
  return (
    <div>
      <Navbar />
      <Chatlist accountList={chatData} />
    </div>
  );
};

export default chatList;
