import React from "react";
import { IChat, IChatRow } from "../../types/chat.interface";

interface IChatContext {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  openedRoomChat: { chatName: string; isGroup: boolean } | null;
  setOpenedRoomChat: React.Dispatch<
    React.SetStateAction<{ chatName: string; isGroup: boolean } | null>
  >;
  chatList: IChatRow[];
  setChatList: React.Dispatch<React.SetStateAction<IChatRow[]>>;
  chat: IChat[] | null;
  setChat: React.Dispatch<React.SetStateAction<IChat[] | null>>;
}

const ChatContext = React.createContext<IChatContext>({} as IChatContext);

export default ChatContext;
