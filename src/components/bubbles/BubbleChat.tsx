import React from "react";
import MoreSvg from "@assets/svg/more.svg";

interface IBubbleChat {
  sender: string;
  message: string;
  time: string;
  colorScheme: string;
  isSender: boolean;
}

const BubbleChat: React.FC<IBubbleChat> = (props) => {
  const { sender, message, time, colorScheme, isSender } = props;
  const [isShowPopupMenu, setIsShowPopupMenu] = React.useState<boolean>(false);

  const togglePopupMenu = () => setIsShowPopupMenu(!isShowPopupMenu);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const bubbleChat = document.getElementById("bubble-chat");

    if (bubbleChat && !bubbleChat.contains(target)) {
      setIsShowPopupMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex flex-col my-2.5 ${
        isSender ? "items-end" : "items-start"
      }`}
    >
      <span
        className={`text-xs font-semibold ${isSender ? "text-right" : ""} ${
          colorScheme === "chats-magnolia"
            ? "text-chats-mediumPurple"
            : colorScheme === "chats-serenade"
            ? "text-chats-tulipTree"
            : colorScheme === "chats-hummingBird"
            ? "text-chats-seaGreen"
            : "text-gray"
        }`}
      >
        {sender}
      </span>
      <div
        className={`flex relative ${
          isSender ? "flex-row-reverse" : "flex-row"
        } items-start gap-2 ${isSender ? "mb-2" : "mb-4"}`}
        id="bubble-chat"
      >
        <div
          className={`rounded-md p-3 mt-1 text-gray max-w-[520px] ${
            colorScheme === "chats-magnolia"
              ? "bg-chats-magnolia"
              : colorScheme === "chats-serenade"
              ? "bg-chats-serenade"
              : colorScheme === "chats-hummingBird"
              ? "bg-chats-hummingBird"
              : colorScheme === "chats-lightGray"
              ? "bg-chats-lightGray"
              : "bg-primary bg-opacity-50"
          }`}
        >
          <p>{message}</p>
          <span className="text-xs block mt-1 text-right">{time}</span>
        </div>
        <button className="mt-1" onClick={togglePopupMenu}>
          <img src={MoreSvg} alt="More" />
        </button>

        <div
          className={`absolute flex flex-col items-start rounded-[5px] bg-white border border-gray-light w-32 transition-all duration-200 ${
            isShowPopupMenu
              ? "visible opacity-100 top-5"
              : "invisible opacity-0 top-10"
          } ${isSender ? "left-0" : "right-0"} ${isSender ? "mr-2" : "ml-2"} ${
            isSender ? "shadow-md" : "shadow-sm"
          }`}
        >
          <button className="py-2 px-4 hover:bg-gray-lightest transition-all duration-300 text-primary border-b border-gray-light w-full text-start">
            Edit
          </button>
          <button className="py-2 px-4 hover:bg-gray-lightest transition-all duration-300 text-indicator-flamingo w-full text-start">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BubbleChat;
