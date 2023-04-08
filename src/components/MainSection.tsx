import { useState } from "react"
import ChatGPTIcon from "./ChatGPTIcon"
import StartingChat from "./StartingChat"
import ChatForm from "./ChatForm"

export default function MainSection() {
  const [startingThread, setStarting] = useState(true)

  return (
    <div className="relative flex h-full flex-col flex-grow overflow-x-hidden overflow-y-auto text-gray-800 dark:text-gray-100">
      <StartingChat startingThread={startingThread} />
      <ChatForm />
    </div>
  )
}



const MessageBox = ({ background = false, title, content }: { background: boolean, title: string, content: string }) => {
  return (
    <div className={`group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 ${background ? "bg-gray-50 dark:bg-[#444654]" : "" }`}>
      <div className="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
        {/* Profile Image */}
        <div className={`text-gray-100 uppercase rounded-sm h-[30px] w-[30px] grid place-items-center ${background ? "bg-[#10A37F]" : "bg-[#7D8C8E]"}`}>
          {
            background ? 
            <ChatGPTIcon /> :
            title.slice(0,2)
          }
        </div>
        <div className="flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
          {
            content.split("\\n")
              .map((subcontent) => <p className="w-full break-words">{subcontent}</p>)
          }
        </div>
      </div>
    </div>
  )
}