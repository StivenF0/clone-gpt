import { api } from "@/utils/api";
import { useState } from "react";

export interface Message {
  role: string;
  content: string;
}

export interface Thread {
  title: string;
  messages: Message[];
}

const useThreads = (userEmail: string) => {
  // const setThreadsData = api.threads.setThreads.useMutation();
  const fetchThreads = api.threads.getThreads.useMutation();
  const fetchedThreads = fetchThreads.mutate(userEmail);

  // Get threads from the database
  const [threads, setThreads] = useState(
    Array.isArray(fetchedThreads) && fetchedThreads.length === 0
      ? []
      : (fetchedThreads! as Thread[])
  );

  // useEffect(() => {
  //   setThreadsData.mutate(threads);
  // }, [setThreads, threads]);

  const addThread = (title: string) => {
    setThreads([
      ...threads,
      {
        title: title,
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: "",
          },
        ],
      },
    ]);
  };

  return { threads, addThread };
};

export default useThreads;
