import Head from "next/head";
import { HiOutlineMail } from 'react-icons/hi';
import { BiKey } from 'react-icons/bi';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { type MutableRefObject, useRef, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { type GetServerSideProps } from "next";
import { getServerAuthSession } from "@/server/auth";


export default function SignInPage() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = {
      email: (emailRef.current! as HTMLInputElement).value,
      password: (passwordRef.current! as HTMLInputElement).value,
    }
    const res = await signIn("credentials", {
      ...body,
      callbackUrl: "/",
    })
    console.log(res)
  }


  return <>
    <Head>
      <title>Sign In</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <main
      className="w-full min-h-screen grid place-items-center bg-gray-800"
    >
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col min-w-[20rem] w-[20vw] max-w-[30rem] aspect-[2/3] bg-gray-900 rounded-xl p-6"
      >
        <h1 className="text-gray-100 font-bold text-4xl">Sign In</h1>
        <div className="flex flex-col flex-grow items-center justify-center">
          <div className="flex items-center border-b border-gray-100 w-[85%]">
            <HiOutlineMail 
              className="stroke-slate-300 text-xl"
            />
            <div className="px-[0.2rem]" />
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="flex-grow bg-transparent focus:outline-none text-gray-100 placeholder:text-gray-600"
            />
          </div>
          <div className="p-3"/>
          {
            PasswordInput(passwordRef)
          }
          <div className="p-3"/>
          <div className="w-[85%]">
            <input
              type="submit" 
              value="Sign In" 
              className="border-2 border-slate-300 w-full h-full py-1 text-slate-300 rounded-xl font-bold text-lg cursor-pointer" 
            />
          </div>
        </div>
        <div className="p-2" />
        <div className="text-gray-100">Not registered yet? <Link className="text-green-400 font-semibold" href="/auth/signup">Sign Up</Link></div>
      </form>
    </main>
  </>
}


function PasswordInput (passwordRef: MutableRefObject<null>) {
  const eyeClassName = "absolute fill-slate-300 right-0 top-1/2 -translate-y-1/2";
  const [showPassword, setShow] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    setShow(!showPassword)
  }

  return (
    <div className="flex items-center border-b border-gray-100 w-[85%] relative">
      <BiKey 
        className="fill-slate-300 text-2xl"
      />
      <div className="px-[0.13rem]" />
      <input
        ref={passwordRef}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="bg-transparent focus:outline-none text-gray-100 placeholder:text-gray-600 w-[calc(90%-1rem)]"
      />
      <div className="px-[0.65rem] cursor-pointer" onClick={handleToggle}>
        {
          !showPassword
          ?
          <BsFillEyeFill className={eyeClassName} />
          :
          <BsFillEyeSlashFill className={eyeClassName} />
        }
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context)

  if (session) {
    return {
      redirect: {
        destination: "/",
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