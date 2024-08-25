import React from "react";
import useChat from "../../hooks/useChat";
import ChatList from "../../organisms/Chat/ChatList";
import ChatContext from "../../contexts/chatContext";
import RoomChat from "../../organisms/Chat/RoomChat";
import CardBase from "../../components/cards/CardBase";

interface IChat {
  isShow: boolean;
}

const Chat: React.FC<IChat> = (props) => {
  const { isShow } = props;
  const { openedRoomChat } = React.useContext(ChatContext);
  // eslint-disable-next-line no-empty-pattern
  const {} = useChat({ isShow });

  return (
    <div
      className={`absolute right-[34px] transition-all duration-300 ${
        isShow
          ? "opacity-100 visible bottom-[110px]"
          : "opacity-0 invisible bottom-24"
      }`}
    >
      <CardBase extra="!py-0">
        {!openedRoomChat ? <ChatList /> : <RoomChat />}
      </CardBase>
    </div>
  );
};

export default Chat;
