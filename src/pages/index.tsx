import { GetServerSideProps, type NextPage } from "next";
import { getServerAuthSession } from "@/server/auth";
import Head from "next/head";
import SideBar from "@/components/Sidebar";
import MainSection from "@/components/MainSection";
import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useThreads, { type Thread } from "@/hooks/useThreads";
import { Session } from "@prisma/client";

export const Context = createContext({} as {
  isDarkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  isShowing: boolean
  setShowing: React.Dispatch<React.SetStateAction<boolean>>
  startingThread: boolean
  setStarting: React.Dispatch<React.SetStateAction<boolean>>
  threads?: Thread[]
})

const Home: NextPage = (props) => {
  const { data: session, status } = useSession({required: true})
  if (status === "loading") {
    return <div className="">Loading</div>
  }

  const [isDarkMode, setDarkMode] = useState(true)
  const [isShowing, setShowing] = useState(false) // Showing the sidebar
  const [startingThread, setStarting] = useState(true) // Starting new thread
  
  useEffect(() => {
    const htmlElement = document.querySelector("html")!
    if (isDarkMode) {
      htmlElement.classList.add("dark")
      return
    }
    htmlElement.classList.remove("dark")
  }, [isDarkMode])

  return <>
    <Head>
      <title>Clone GPT - Stiven</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Context.Provider value={{isDarkMode, setDarkMode, isShowing, setShowing, startingThread, setStarting}}>
      <main className="bg-white dark:bg-gray-800 w-full h-screen overflow-hidden relative flex">

        {/* Sidebar Layout */}
        <SideBar />

        {/* Main Section */}
        <MainSection />

      </main>
    </Context.Provider>
  </>
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

export default Home;