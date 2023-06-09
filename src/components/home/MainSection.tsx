import { useContext, useState } from "react";
import ChatGPTIcon from "../assets/ChatGPTIcon";
import StartingChat from "./static/StartingChat";
import ChatForm from "./ChatForm";
import { MainCtx } from "@/pages/index";
import { generateUUID } from "@/functions/uuid";

export interface Message {
  role: "assistant" | "system" | "user";
  content: string;
}

export default function MainSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { startingThread, setStarting } = useContext(MainCtx);

  if (messages.length > 0) {
    setStarting(false);
  }

  return (
    <div className="relative flex h-full flex-grow flex-col overflow-y-auto overflow-x-hidden text-gray-800 dark:text-gray-100">
      <TopbarMobile />
      {startingThread && <StartingChat />}
      <ChatForm hooks={{ messages, setMessages }} />

      {messages.map((message) => {
        return (
          <MessageBox
            key={generateUUID()}
            title={"User"}
            background={message.role === "assistant"}
            content={message.content}
          />
        );
      })}
    </div>
  );
}

const TopbarMobile = () => {
  const { setShowing } = useContext(MainCtx);

  return (
    <div className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
      <button
        onClick={() => {
          setShowing(true);
        }}
        type="button"
        className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <h1 className="flex-1 text-center text-base font-normal">CloneGPT</h1>
      <button type="button" className="px-3">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

const MessageBox = ({
  background = false,
  title,
  content,
}: {
  background: boolean;
  title: string;
  content: string;
}) => {
  console.log(content);

  return (
    <div
      className={`group w-full border-b border-black/10 text-gray-800 dark:border-gray-900/50 dark:text-gray-100 ${
        background ? "bg-gray-50 dark:bg-[#444654]" : ""
      }`}
    >
      <div className="m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-xl lg:px-0 xl:max-w-3xl">
        {/* Profile Image */}
        <div
          className={`grid h-[30px] w-[30px] place-items-center rounded-sm uppercase text-gray-100 ${
            background ? "bg-[#10A37F]" : "bg-[#7D8C8E]"
          }`}
        >
          {background ? <ChatGPTIcon /> : title.slice(0, 2)}
        </div>
        <div className="flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
          {content.split("\\n").map((subcontent) => (
            <p key={subcontent} className="w-full break-words">
              {subcontent}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
