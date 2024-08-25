import React from "react";
import ChatContext from ".";
import { IChat, IChatRow } from "../../types/chat.interface";

type ChatProviderProps = {
  children: React.ReactNode;
};

export const ChatProvider: React.FC<ChatProviderProps> = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [openedRoomChat, setOpenedRoomChat] = React.useState<{
    chatName: string;
    isGroup: boolean;
  } | null>(null);
  const [chatList, setChatList] = React.useState<IChatRow[]>([]);
  const [chat, setChat] = React.useState<IChat[] | null>(null);

  return (
    <ChatContext.Provider
      value={{
        isLoading,
        setIsLoading,
        openedRoomChat,
        setOpenedRoomChat,
        chatList,
        setChatList,
        chat,
        setChat,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};
