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
    .query(async ({ input }: { input: string }) => {
      const userThreads = await prisma.user.findUnique({
        where: {
          id: input
        },
        select: {
          chatThread: true
        }
      })

      return userThreads
    })
})