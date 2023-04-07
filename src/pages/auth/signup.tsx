import Head from "next/head";
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { MutableRefObject, useRef, useState } from "react";
import Link from "next/link";
import { api } from "@/utils/api";
import { useRouter } from "next/router";


export default function SignUpPage() {
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  const router = useRouter()

  const createUser = api.auth.createUser.useMutation()
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    const body = {
      name: (nameInputRef.current! as HTMLInputElement).value,
      email: (emailInputRef.current! as HTMLInputElement).value,
      password: (passwordInputRef.current! as HTMLInputElement).value,
    }

    try {
      const user = await createUser.mutate(body);
      router.push("/auth/signin")
    } catch (error) {
      console.log(error)
    }
  }

  return <>
    <Head>
      <title>Sign Up</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <main
      className="w-full min-h-screen grid place-items-center bg-dark"
    >
      <form 
        className="flex flex-col min-w-[20rem] w-[20vw] max-w-[30rem] aspect-[2/3] bg-gray-900 rounded-xl p-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-gray-100 font-bold text-4xl">Sign Up</h1>
        <div className="flex flex-col flex-grow items-center justify-center">
          <div className="flex items-center border-b border-gray-100 w-[85%]">
            <AiOutlineUser 
              className="fill-slate-300 text-xl"
            />
            <div className="px-[0.2rem]" />
            <input
              ref={nameInputRef}
              name="name"
              type="text"
              placeholder="Name"
              className="flex-grow bg-transparent focus:outline-none text-gray-100 placeholder:text-gray-600"
            />
          </div>
          <div className="p-3"/>
          <div className="flex items-center border-b border-gray-100 w-[85%]">
            <HiOutlineMail 
              className="stroke-slate-300 text-xl"
            />
            <div className="px-[0.2rem]" />
            <input
              ref={emailInputRef}
              name="email"
              type="email"
              placeholder="Email"
              className="flex-grow bg-transparent focus:outline-none text-gray-100 placeholder:text-gray-600"
            />
          </div>
          <div className="p-3"/>
          {
            PasswordInput(passwordInputRef)
          }
          <div className="p-3"/>
          <div className="w-[85%]">
            <input
              type="submit" 
              value="Sign Up" 
              className="border-2 border-slate-300 w-full h-full py-1 text-slate-300 rounded-xl font-bold text-lg cursor-pointer" 
            />
          </div>
        </div>
        <div className="p-2" />
        <div className="text-gray-100">Alredy registered? <Link className="text-aigreen font-semibold" href="/auth/signin">Sign In</Link></div>
      </form>
    </main>
  </>
}


function PasswordInput(passwordInputRef: MutableRefObject<null>) {
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
        ref={passwordInputRef}
        name="password"
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
