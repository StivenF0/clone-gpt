import { useContext, useState } from "react"
import ChatGPTIcon from "./ChatGPTIcon"
import StartingChat from "./StartingChat"
import ChatForm from "./ChatForm"
import { Context } from "@/pages"
import { useSession } from "next-auth/react"

export interface Message {
  role: "assistant" | "system" | "user"
  content: string
}

export default function MainSection() {
  const {data: session} = useSession()
  const [messages, setMessages] = useState<Message[]>([])
  const {startingThread, setStarting} = useContext(Context)

  if (messages.length > 0) {
    setStarting(false)
  }

  return (
    <div className="relative flex h-full flex-col flex-grow overflow-x-hidden overflow-y-auto text-gray-800 dark:text-gray-100">
      <TopbarMobile />
      {
        startingThread &&
        <StartingChat />
      }
      <ChatForm hooks={{ messages, setMessages }} />
      
      {
        messages.map((message) => {
          return (
            <MessageBox
              title={session!.user.name as string}
              background={message.role === "assistant"}
              content={message.content}
            />
          )
        })
      }
    </div>
  )
}

const TopbarMobile = () => {
  const { setShowing } = useContext(Context)

  return (
    <div className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
      <button onClick={() => {setShowing(true)}} type="button" className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white">
        <span className="sr-only">Open sidebar</span>
        <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <h1 className="flex-1 text-center text-base font-normal">CloneGPT</h1>
      <button type="button" className="px-3">
        <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </button>
    </div>
  )
}

const MessageBox = ({ background = false, title, content }: { background: boolean, title: string, content: string }) => {
  console.log(content)

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