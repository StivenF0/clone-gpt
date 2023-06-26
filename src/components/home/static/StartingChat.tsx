const StartingChat = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center mt-4 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
        CloneGPT
      </h1>

      <div className="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]">
        <div className="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
          {/* Profile Image */}
          <img
            alt="Stiven"
            height="30"
            width="30"
            src="https://lh3.googleusercontent.com/a/AGNmyxaE6KnzXMprzgGeP8ffYaQ5OGOWlMAabBMKWYhrbg=s83-c-mo"
            className="rounded-sm h-[30px] w-[30px] box-border border-2 border-green-400"
          />
          {/* Content */}
          <div className="flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
            {/* Text */}
            <p className="w-full break-words">
              Welcome to CloneGPT, a clone of{" "}
              <a
                className="text-green-400 font-semibold hover:border-b border-current"
                target="_blank"
                href="https://chat.openai.com/chat/"
              >
                ChatGPT
              </a>
              . This was made by Stiven Felipe, with the objective to learn new
              skills using the tech provided by{" "}
              <a
                className="text-green-400 font-semibold hover:border-b border-current"
                target="_blank"
                href="https://t3.gg/"
              >
                T3 Stack
              </a>
              . The app was created using{" "}
              <a
                className="bg-black text-gray-100 px-1"
                target="_blank"
                href="https://create.t3.gg/"
              >
                <code>create-t3-app</code>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartingChat;
