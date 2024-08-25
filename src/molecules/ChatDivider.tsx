import React from "react";

interface IChatDivider {
  text: string;
  isNewMessage?: boolean;
}

const ChatDivider = React.forwardRef(
  (props: IChatDivider, ref: React.Ref<HTMLDivElement>) => {
    const { text } = props;

    return (
      <div
        ref={ref}
        className={`flex items-center justify-center relative mt-6 ${
          props?.isNewMessage ? "mt-4 mb-6" : ""
        }`}
      >
        <hr
          className={`mx-8 w-full absolute top-1/2 -translate-y-1/2 ${
            props?.isNewMessage ? "border-indicator-flamingo" : "border-gray"
          }`}
        />
        <p
          className={`bg-white font-semibold text-lg px-5 z-10 ${
            props?.isNewMessage ? "text-indicator-flamingo" : "text-gray"
          }`}
        >
          {text}
        </p>
      </div>
    );
  }
);

export default ChatDivider;
