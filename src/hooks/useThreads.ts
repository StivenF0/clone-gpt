import { api } from "@/utils/api"
import { Session } from "next-auth"
import { useEffect, useState } from "react"

export interface Thread {
  title: string
  messages: {
    role: string
    content: string
  }[]
}


const useThreads = async (session: Session) => {
  const [threads, setThreads] = useState([] as Thread[])
  const userId = session.user.id
  const response = api.threads.getThreads.useQuery(userId)

  useEffect(() => {
    const fetchThreads = async () => {
      const data = await response.query()
      console.log(data)
    }
    fetchThreads()
  }, [threads])
  

  return threads
}

export default useThreads