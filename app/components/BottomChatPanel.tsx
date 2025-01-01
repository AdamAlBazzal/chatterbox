import React from "react";
import TextField from "./SendTextField";
import SendBtn from "./SendBtn";

const BottomChatPanel = () => {
  return (
    <div className="sticky bottom-0 left-0 w-full">
      <div className="flex items-center space-x-1 p-1">
        <TextField />
        <SendBtn />
      </div>
    </div>
  );
};

export default BottomChatPanel;
