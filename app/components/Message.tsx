import React from "react";
interface Props {
  content: string;
  date: Date;
}
const Message = ({ content, date }: Props) => {
  return (
    <div className="self-start text-gray-200 border-0 rounded-xl bg-primary flex flex-row h-14 gap-2 px-4 py-2">
      <div className="self-start">{content}</div>
      <div className="text-xs font-semibold text-secondary self-end">
        11:36 pm
      </div>
    </div>
  );
};

export default Message;
