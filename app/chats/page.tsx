import React from "react";
import Navbar from "../components/ChatsPageNavBar";
import Chatlist from "../components/ChatList";
const chatList = () => {
  return (
    <div>
      <Navbar />
      <Chatlist />
    </div>
  );
};

export default chatList;
