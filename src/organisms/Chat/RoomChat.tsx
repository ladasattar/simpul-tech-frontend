import React from "react";
import useChat from "../../hooks/useChat";
import Close from "@assets/svg/close.svg";
import BackArrow from "@assets/svg/arrow-back.svg";
import ChatContext from "../../contexts/chatContext";
import ChatDivider from "../../molecules/ChatDivider";
import BubbleChat from "../../components/bubbles/BubbleChat";
import ChatTypingField from "../../molecules/ChatTypingField";
import BadgeNotification from "../../components/badges/Notification";
import { useInView } from "react-intersection-observer";
import Alert from "../../components/alerts";

const chatColorSchemes = [
  "chats-serenade",
  "chats-hummingBird",
  "chats-lightGray",
];

const RoomChat = () => {
  const { openedRoomChat, setOpenedRoomChat, chat } =
    React.useContext(ChatContext);
  const { goToBottomOfChat } = useChat({ isShow: true });
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const randomUniqueColorScheme = () => {
    const randomIndex = Math.floor(Math.random() * chatColorSchemes.length);
    return chatColorSchemes[randomIndex];
  };

  return (
    <section id="roomChatContainer">
      <section className="w-full flex items-center justify-between border-b border-[#BDBDBD] px-6 py-[18px]">
        <div className="flex items-center gap-3">
          <button onClick={() => setOpenedRoomChat(null)} className="p-1">
            <img src={BackArrow} alt="Back" />
          </button>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-0.5 text-lg text-primary">
              {openedRoomChat?.chatName}
            </h3>
            {openedRoomChat?.isGroup ? (
              <span className="text-[#333333] text-sm">3 Participants</span>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button>
          <img src={Close} alt="Close" />
        </button>
      </section>
      <section className="px-8 pb-16">
        {chat ? (
          chat?.map((chat, index) => {
            return (
              <div key={index}>
                {index === 2 ? (
                  <ChatDivider
                    text="Today June 09, 2021"
                    isNewMessage={false}
                  />
                ) : (
                  <></>
                )}
                {!chat.isRead ? (
                  <ChatDivider
                    text="New Message"
                    isNewMessage={true}
                    ref={ref}
                  />
                ) : (
                  <></>
                )}
                <BubbleChat
                  key={index}
                  time={chat.time}
                  colorScheme={
                    chat.isSender ? "chats-magnolia" : randomUniqueColorScheme()
                  }
                  isSender={chat.isSender}
                  message={chat.message}
                  sender={chat.sender}
                />
                {!chat.isRead ? (
                  <BadgeNotification
                    inView={inView}
                    text="New Message"
                    onClick={goToBottomOfChat}
                  />
                ) : (
                  <></>
                )}
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-[80vh]">
            <p className="text-[#333333] text-lg">No messages yet</p>
          </div>
        )}

        {openedRoomChat?.chatName === "FastVisa Support" ? (
          <Alert
            message="Please wait while we connect you with one of our team ..."
            type="info"
            isLoader={true}
          />
        ) : (
          <></>
        )}
        <ChatTypingField />
      </section>
    </section>
  );
};

export default RoomChat;
