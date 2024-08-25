import React from "react";
import useChat from "../../hooks/useChat";
import ChatRow from "../../molecules/ChatRow";
import Loading from "../../molecules/Loading";
import SearchBar from "../../molecules/SearchBar";
import ChatContext from "../../contexts/chatContext";

const ChatList = () => {
  const { isLoading, chatList, setOpenedRoomChat } =
    React.useContext(ChatContext);
  const { chooseChats } = useChat({ isShow: true });

  return (
    <section className="flex-1 flex flex-col py-6">
      <section className="px-8">
        <SearchBar />
      </section>
      {isLoading ? <Loading text="Loading Chats ..." /> : <></>}
      {chatList.map((chat, index) => (
        <div key={index}>
          <ChatRow
            chatName={chat.chatName}
            isGroup={chat.isGroup}
            lastChatTime={chat.lastChatTime}
            lastChat={chat.lastChat}
            unreadChat={chat.unreadChat}
            onClick={() => {
              setOpenedRoomChat({
                chatName: chat.chatName,
                isGroup: chat.isGroup!,
              });
              chooseChats(chat.chatName);
            }}
          />
          {index !== chatList.length - 1 ? (
            <hr className="border-gray-light mx-8" />
          ) : (
            <></>
          )}
        </div>
      ))}
    </section>
  );
};

export default ChatList;
