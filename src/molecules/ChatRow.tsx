import React from "react";
import Avatars from "../components/avatars";
import { IChatRow } from "../types/chat.interface";

interface IChatList extends IChatRow {
  onClick: () => void;
}

const ChatRow: React.FC<IChatList> = (props) => {
  const { isGroup, chatName, lastChat, lastChatTime, unreadChat, onClick } =
    props;

  return (
    <div
      className={`flex items-start gap-4 py-[22px] hover:bg-slate-100 transition-all duration-300 cursor-pointer px-8 ${
        unreadChat > 0 ? "bg-[#F7F7F7]" : ""
      }`}
      onClick={onClick}
    >
      <Avatars isGroup={isGroup} />
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <h3 className="line-clamp-2 font-bold text-base text-primary mb-1">
            {chatName}
          </h3>
          <p className="text-gray text-base">{lastChatTime}</p>
        </div>
        <div className="flex flex-col">
          {lastChat?.sender ? (
            <p className="font-bold text-sm text-gray">{lastChat.sender} :</p>
          ) : (
            <></>
          )}
          <p className="line-clamp-1 text-gray -mt-0.5">{lastChat.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatRow;
