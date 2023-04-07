import { GetServerSideProps, type NextPage } from "next";
import { getServerAuthSession } from "@/server/auth";
import Head from "next/head";
import { signOut } from "next-auth/react";
import SideBar from "@/components/Sidebar";

const Home: NextPage = () => {
  return <>
    <Head>
      <title>Clone GPT - Stiven</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <main className="bg-dark w-full h-screen overflow-hidden relative flex">

      {/* Sidebar Layout */}
      <SideBar />

    </main>
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