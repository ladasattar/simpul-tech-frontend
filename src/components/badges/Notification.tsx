import React from "react";
import BackArrow from "@assets/svg/arrow-back.svg";

interface IBadgeNotification {
  inView: boolean;
  text: string;
  onClick?: () => void;
}

const BadgeNotification: React.FC<IBadgeNotification> = (props) => {
  const { inView, text, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-1 cursor-pointer absolute left-1/2 -translate-x-1/2 rounded-[5px] py-2 px-3 font-semibold bg-stickers-aliceBlue z-10 shadow-md transition-all duration-100 ${
        !inView
          ? "opacity-100 visible bottom-20"
          : "opacity-0 invisible bottom-12"
      }`}
    >
      <span className="text-primary">{text}</span>
      <img
        src={BackArrow}
        alt="Down to chat"
        className="-rotate-90 w-4 grayscale"
      />
    </div>
  );
};

export default BadgeNotification;
