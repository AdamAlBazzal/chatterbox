import React from "react";
import Message from "./Message";
const MessageListView = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Message date={new Date()} content="hello" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
      <Message date={new Date()} content="Hi" />
    </div>
  );
};

export default MessageListView;
