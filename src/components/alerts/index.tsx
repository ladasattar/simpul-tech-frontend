import SpinnerBlue from "@assets/svg/spinner-blue.svg";
import React from "react";

interface IAlert {
  message: string;
  type: "info" | "error" | "success" | "warning";
  isLoader?: boolean;
}

const Alert: React.FC<IAlert> = (props) => {
  const { message, type, isLoader } = props;

  return (
    <div className="absolute bottom-[72px] left-0 w-full h-14 px-8">
      <div
        className={`w-full h-full rounded-[5px] flex items-center overflow-hidden gap-3 ${
          type === "info"
            ? "bg-primary bg-opacity-10"
            : type === "error"
            ? "bg-indicator-flamingo bg-opacity-10"
            : type === "success"
            ? "bg-chats-hummingBird"
            : "bg-chats-serenade"
        }`}
      >
        {isLoader ? (
          <img src={SpinnerBlue} alt="Spinner" className="ml-6 animate-spin" />
        ) : (
          <></>
        )}
        <span className="font-semibold text-gray">{message}</span>
      </div>
    </div>
  );
};

export default Alert;
