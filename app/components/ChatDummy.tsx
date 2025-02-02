import React from "react";

const ChatDummy = () => {
  return (
    <div className=" w-screen rounded-md p-4">
      <div className="flex animate-pulse space-x-4">
        <div className="size-10 rounded-full bg-gray-200"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="h-2 rounded bg-gray-200 w-10"></div>
              <div className="h-2 rounded bg-gray-200 w-10"></div>
            </div>
            <div className="h-2 rounded bg-gray-200 w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDummy;
