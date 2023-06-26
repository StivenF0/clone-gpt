import MainSection from "@/components/home/MainSection";
import SideBar from "@/components/home/Sidebar";
import Head from "next/head";
import { createContext, useEffect, useState } from "react";

export const MainCtx = createContext(
  {} as {
    isDarkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    isShowing: boolean;
    setShowing: React.Dispatch<React.SetStateAction<boolean>>;
    startingThread: boolean;
    setStarting: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

const Home = () => {
  const [isShowing, setShowing] = useState(false); // Showing the sidebar
  const [isDarkMode, setDarkMode] = useState(true); // Dark theme state
  const [startingThread, setStarting] = useState(true); // Initializing threads

  useEffect(() => {
    const htmlElement = document.querySelector("html")!;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
      return;
    }
    htmlElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <title>Clone GPT - Stiven</title>
        <meta name="description" content="Generated by create-next-app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainCtx.Provider
        value={{
          isShowing,
          setShowing,
          isDarkMode,
          setDarkMode,
          startingThread,
          setStarting,
        }}
      >
        <main className="relative flex h-screen w-full overflow-hidden bg-white dark:bg-gray-800">
          {/* Sidebar Layout */}
          <SideBar />

          {/* Main Section */}
          <MainSection />
        </main>
      </MainCtx.Provider>
    </>
  );
};

export default Home;
