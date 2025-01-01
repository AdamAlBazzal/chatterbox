import React from "react";
import ChatDetailPageNavBar from "@/app/components/ChatDetailPageNavBar";
import MessageListView from "@/app/components/MessageListView";
import BottomChatPanel from "@/app/components/BottomChatPanel";
const chatItemDetail = () => {
  return (
    <>
      <ChatDetailPageNavBar />
      <MessageListView />
      <BottomChatPanel />
    </>
  );
};

export default chatItemDetail;
