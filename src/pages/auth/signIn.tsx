import Head from "next/head";

/*
bg-gray-900 
#343541
*/

export default function SignIn() {
  return <>
    <Head>
      <title>Sign In</title>
    </Head>
    <main
      className="w-full min-h-screen grid place-items-center bg-dark"
    >
      <form 
        className="min-w-[14rem] w-[20vw] max-w-[30rem] aspect-[2/3] bg-gray-900 rounded-xl p-6"
      >
        <h1 className="text-white font-bold text-4xl">Sign In</h1>
        <div className="">
          
        </div>
      </form>
    </main>
  </>
}