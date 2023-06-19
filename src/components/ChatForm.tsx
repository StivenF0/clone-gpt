import React, { useEffect, useState } from "react";
import { type Message } from "./MainSection";
// import { api } from "@/utils/api";

interface ChatFormProps {
  hooks: {
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  };
}

const ChatForm = ({ hooks: { messages, setMessages } }: ChatFormProps) => {
  const [textValue, setTextValue] = useState("");
  const [areaHeight, setHeight] = useState(24);
  // const getPrompt = api.assistant.sendPrompt.useMutation();

  const addMessage = async () => {
    // const response = (await getPrompt.mutate(textValue)) as unknown as string;

    setMessages([
      ...messages,
      {
        role: "user",
        content: textValue,
      },
      // {
      //   role: "assistant",
      //   content: response
      // }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textValue.replace(/[\s\n]/g, "") === "") return;
    addMessage();
    setTextValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  useEffect(() => {
    const lines = textValue.match(/\n/g);
    setHeight(lines ? (lines.length + 1) * 24 : 24);
  }, [textValue]);

  return (
    <div className="md:bg-vert-light-gradient dark:md:bg-vert-dark-gradient absolute bottom-0 left-0 w-full border-t bg-white pt-2 dark:border-white/20 dark:bg-gray-800 md:border-t-0 md:border-transparent md:!bg-transparent md:dark:border-transparent">
      <form
        onSubmit={handleSubmit}
        className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
      >
        <div className="relative flex h-full flex-1 md:flex-col">
          <div className="ml-1 flex justify-center gap-0 md:m-auto md:mb-2 md:w-full md:gap-2"></div>
          <div className="relative flex w-full flex-grow flex-col rounded-md border border-black/10 bg-white py-2 shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-gray-900/50 dark:bg-gray-700 dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] md:py-3 md:pl-4">
            <textarea
              value={textValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              data-id="root"
              placeholder="Send a message..."
              className="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:outline-0 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0"
              style={{
                maxHeight: "200px",
                height: `${areaHeight}px`,
                overflowY: "hidden",
              }}
            ></textarea>
            <button className="absolute bottom-1.5 right-1 rounded-md p-1 text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent dark:hover:bg-gray-900 enabled:dark:hover:text-gray-400 dark:disabled:hover:bg-transparent md:bottom-2.5 md:right-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className="px-3 pb-3 pt-2 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pb-6 md:pt-3">
        <span>
          <span className="cursor-pointer underline">
            CloneGPT Apr 23 Version
          </span>
          . Free Research Preview. CloneGPT may contain some bugs, its just a
          clone
        </span>
      </div>
    </div>
  );
};

export default ChatForm;
