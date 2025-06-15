interface chatProp {
  message: string;
  isUser: boolean;
}

const ChatBubble = ({ message, isUser }: chatProp) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-3/4 p-3  ${
          isUser
            ? "bg-black font-medium font-fontOne md:text-[14px] text-[9px] text-white rounded-tl-[68.9px] rounded-br-[0px] rounded-tr-[41.34px]   rounded-bl-[68.9px] "
            : "bg-white font-medium font-fontOne md:text-[14px] text-[9px] text-black rounded-tl-[0px] rounded-bl-[31.5px] rounded-tr-[52.5px]   rounded-br-[52.5px] max-w-[535px]"
        }`}
      >
        {message}
      </div>
    </div>
  );
};
export default ChatBubble;
