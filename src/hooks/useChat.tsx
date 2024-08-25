import React from "react";
import Chats from "../data/chats.json";
import ChatContext from "../contexts/chatContext";
import { IChatRow } from "../types/chat.interface";

const chatData: IChatRow[] = [
  {
    chatName: "109220-Naturalization",
    isGroup: true,
    lastChatTime: "January 1, 2021 19:10",
    lastChat: {
      sender: "Cameron Philips",
      message: "Please check this out!",
    },
    unreadChat: 0,
  },
  {
    chatName:
      "Jeannette Moraima Guaman Chamba (Hutto l-589) [Hutto Follow Up - Brief Service]",
    isGroup: true,
    lastChatTime: "02/06/2021 10:45",
    lastChat: {
      sender: "Ellen",
      message: "Hey, please read.",
    },
    unreadChat: 0,
  },
  {
    chatName: "8405-Diana SALAZAR MUNGUIA",
    isGroup: true,
    lastChatTime: "01/06/2021 12:19",
    lastChat: {
      sender: "Cameron Philips",
      message:
        "I understand your initial concerns and thats very valid, Elizabeth. But you need to understand that we are here to help you.",
    },
    unreadChat: 0,
  },
  {
    chatName: "FastVisa Support",
    lastChatTime: "01/06/2021 12:19",
    lastChat: {
      sender: "",
      message: "Hey there! Welcome to your inbox.",
    },
    unreadChat: 0,
  },
];

const useChat = (props: { isShow: boolean } = { isShow: false }) => {
  const { isShow } = props;
  const { setChatList, setChat, setIsLoading } = React.useContext(ChatContext);

  const goToBottomOfChat = () => {
    const chatContainer = document.getElementById("roomChatContainer");
    if (chatContainer)
      chatContainer.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  };

  const chooseChats = (name: string) => {
    if (name === "109220-Naturalization")
      setChat(Chats["109220-Naturalization"]);
    else if (name === "FastVisa Support") setChat(Chats["FastVisaSupport"]);
    else setChat(null);
  };

  React.useEffect(() => {
    if (isShow)
      setTimeout(() => {
        setChatList(chatData);
        setIsLoading(false);
      }, 1500);

    // eslint-disable-next-line
  }, [isShow]);

  return {
    goToBottomOfChat,
    chooseChats,
  };
};

export default useChat;
