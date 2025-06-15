/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ChatBubble from "./ChatBubble";
import { Mic, SendHorizontal } from "lucide-react";
// import { CgAttachment } from "react-icons/cg";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "How to write my exam", isUser: true },
    {
      text: "To write your exam effectively, start by preparing thoroughly with regular study and practice of past papers. Ensure you understand the exam format and gather all necessary materials. On exam day, manage your time by reading instructions carefully, starting with easier questions, and allocating time for each section. Use elimination for multiple choice questions. Concentrate on short answers, and outline essays before writing. Review your work for errors, completeness, and clarity. For objective exams, read all options; for subjective exams, support arguments with evidence; for problem-solving exams, show all work and double-check calculations. Post-exam, reflect on your performance to improve for next time.",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");

  return (
    <div className="flex-1 h-screen flex flex-col p-3">
      <div className="p-4 flex justify-between items-center">
        <img src="./APOLLO.svg" className="" alt="apollo" />
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <div className="flex items-center  justify-center">
        <div className=" w-[850px] h-[50px] flex justify-between items-center bg-white rounded-full relative">
          <div className="relative ml-2">
            <input
              type="text"
              placeholder="Ask anything..."
              className="pr-10 pl-5 p-2.5 w-[750px] text-[#484848] font-fontOne font-semibold  rounded-full focus:bg-[#E6E6E6]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="absolute right-11 h-6 w-6 top-3 cursor-pointer">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.652 5.3437C17.9926 4.62495 16.8033 4.58086 16.0108 5.37341L8.24829 13.1359C8.04704 13.3372 8.04704 13.5921 8.24829 13.7933C8.44954 13.9946 8.70445 13.9946 8.9057 13.7933L15.3265 7.37249C15.5073 7.19792 15.7494 7.10133 16.0006 7.10351C16.2519 7.10569 16.4923 7.20648 16.6699 7.38416C16.8476 7.56185 16.9484 7.80221 16.9506 8.05348C16.9528 8.30475 16.8562 8.54683 16.6816 8.72757L10.2608 15.1484C10.042 15.3736 9.7802 15.5526 9.49099 15.6748C9.20177 15.797 8.89098 15.86 8.57699 15.86C8.26301 15.86 7.95222 15.797 7.663 15.6748C7.37379 15.5526 7.11203 15.3736 6.8932 15.1484C6.66803 14.9296 6.48904 14.6678 6.36681 14.3786C6.24459 14.0894 6.18161 13.7786 6.18161 13.4646C6.18161 13.1506 6.24459 12.8398 6.36681 12.5506C6.48904 12.2614 6.66803 11.9996 6.8932 11.7808L14.6557 4.01832C16.1574 2.51566 18.5992 2.46678 20.0511 4.0327C21.5385 5.53632 21.5816 7.9657 20.0224 9.41182L10.9316 18.5026C8.83287 20.6013 5.54195 20.6013 3.4432 18.5026C1.34445 16.4038 1.34445 13.1129 3.4432 11.0142L11.2057 3.25166C11.3864 3.07709 11.6285 2.98049 11.8798 2.98268C12.1311 2.98486 12.3714 3.08565 12.5491 3.26333C12.7268 3.44101 12.8276 3.68138 12.8298 3.93265C12.832 4.18392 12.7354 4.426 12.5608 4.60674L4.79829 12.3692C3.44704 13.7205 3.44704 15.7962 4.79829 17.1475C6.14954 18.4987 8.22529 18.4987 9.57654 17.1475L18.6807 8.04332L18.7104 8.01457C19.4292 7.3562 19.4732 6.16595 18.6807 5.37341C18.6709 5.3637 18.6613 5.3538 18.652 5.3437Z"
                  fill="#484848"
                />
              </svg>
            </div>
            {/* <CgAttachment className="absolute right-11 h-6 w-6 top-3 cursor-pointer text-[#484848]" /> */}
          </div>

          <div className="absolute bg-transparent rounded-full p-1 flex items-center right-4 border-4 border-[#CACACA]">
            <div className="bg-black p-2 rounded-full">
              {input.length > 0 ? (
                <SendHorizontal className="text-textColorSec  cursor-pointer" />
              ) : (
                <Mic className="text-textColorSec  cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
