import { z } from "zod";
import { prisma } from "@/server/db";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const threadsRouter = createTRPCRouter({
  getThreads: publicProcedure
    .input(z.string())
    .mutation(async ({ input }: { input: string }) => {
      const userThreads = await prisma.user.findUnique({
        where: { email: input },
        select: {
          chatThread: true,
        },
      })

      return userThreads
    }),
  setThreads: publicProcedure
    .input(z.array(
      z.object({
        title: z.string(),
        messages: z.array(
          z.object({
            role: z.string(),
            content: z.string(),
          })
        )
      })
    ))
    .mutation(({ input }) => {

    })

})