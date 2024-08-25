import ButtonBase from "../components/buttons/ButtonBase";

const ChatTypingField = () => {
  return (
    <section className="absolute bottom-0 left-0 w-full bg-white pb-5 flex items-center gap-3 px-8 z-20">
      <input
        type="text"
        className="flex-1 py-2 border border-gray-light rounded-[5px] px-4 placeholder:text-[#333333] placeholder:font-medium outline-none"
        placeholder="Type a new message"
      />
      <ButtonBase>Send</ButtonBase>
    </section>
  );
};

export default ChatTypingField;
