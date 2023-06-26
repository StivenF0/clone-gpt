import { MainCtx } from "@/pages/index";
import { useContext } from "react";

export default function SideBar() {
  const { isShowing, setShowing } = useContext(MainCtx);

  return (
    <>
      <div
        className={`flex h-full w-[260px] flex-col space-y-1 bg-gray-900 p-2 max-md:absolute max-md:top-0 max-md:z-30 max-md:w-80 max-md:transition-all max-md:duration-300 max-md:ease-in-out ${
          isShowing ? "max-md:left-0" : "max-md:-left-full"
        }`}
      >
        <CloseSidebarButton setShowing={setShowing} />
        <NewChatButton />

        {/* Threads container*/}
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto border-b border-white/20 text-sm text-gray-100">
          {/* Threads Links*/}
        </div>

        <SideOptions clearButton={false} />
      </div>
      <div
        className={`absolute left-0 top-0 z-20 h-screen w-full bg-[rgba(86,88,105,0.75)] transition-all md:hidden ${
          isShowing ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      ></div>
    </>
  );
}

const CloseSidebarButton = ({
  setShowing,
}: {
  setShowing: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => {
        setShowing(false);
      }}
      type="button"
      className="absolute -right-12 top-2 hidden h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white max-md:flex"
      tabIndex={0}
    >
      <span className="sr-only">Close sidebar</span>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-white"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
};

const NewChatButton = () => {
  return (
    <a className="mb-2 flex flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 px-3 py-3 text-sm text-white transition-colors duration-200 hover:bg-gray-500/10">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      New chat
    </a>
  );
};

const SideOptions = ({ clearButton }: { clearButton: boolean }) => {
  const buttonClassName =
    "flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm";

  const { isDarkMode, setDarkMode } = useContext(MainCtx);

  const handleToggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      {clearButton && (
        <a className={buttonClassName}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          Clear conversations
        </a>
      )}
      <a className={buttonClassName}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        User
      </a>
      <a onClick={handleToggleDarkMode} className={buttonClassName}>
        {isDarkMode ? (
          <>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            Light mode
          </>
        ) : (
          <>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            Dark mode
          </>
        )}
      </a>
      <a
        className={buttonClassName}
        target="_blank"
        href="https://help.openai.com/en/collections/3742473-chatgpt"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Get help
      </a>
      <a className={buttonClassName}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        Log out
      </a>
    </>
  );
};

// const ThreadLink = ({ title, id }: { title: string; id?: string}) => {
//   return (
//     <div className="flex text-gray-100 text-sm py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
//       <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
//       <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
//         {title}
//         <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]" />
//       </div>
//     </div>
//   )
// }

// const ActiveThreadLink = ({ title, id }: { title: string; id?: string}) => {
//   return (
//     <div className="flex text-gray-100 text-sm py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-14 bg-gray-800 hover:bg-gray-800 group">
//       <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
//       <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
//         {title}
//         <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-800" />
//       </div>
//       <div className="absolute flex right-1 z-10 text-gray-300 visible">
//         <button className="p-1 hover:text-white"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>
//         <button className="p-1 hover:text-white"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
//       </div>
//     </div>
//   )
// }
