import { useEffect, useRef } from "react"

const ChatForm = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null) 

  useEffect(() => {
    if (!textAreaRef.current) return
    const textarea = textAreaRef.current
    textarea.addEventListener("keydown", (event) => {
      if (event.shiftKey && event.key === "Enter") {
        event.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value =
          textarea.value.substring(0, start) +
          "\n" +
          textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        textarea.rows += 1
      }
    });
  }, [textAreaRef.current])

  return (
    <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
      <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 md:flex-col">
          <div className="flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
          <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
            <textarea ref={textAreaRef} tabIndex={0} data-id="root" rows={1} placeholder="Send a message..." className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 focus:outline-0 dark:bg-transparent pl-2 md:pl-0" style={{maxHeight: "200px", height: "24px", overflowY: "hidden"}}></textarea>
            <button className="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      </form>
      <div className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
        <span>
          <span className="underline cursor-pointer">CloneGPT Apr 23 Version</span>. Free Research Preview. CloneGPT may contain some bugs, its just a clone
        </span>
      </div>
    </div>
  )
}

export default ChatForm