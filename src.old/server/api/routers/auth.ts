import { z } from "zod";
import sha256 from "crypto-js/sha256";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { prisma } from "@/server/db";

export const authRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({
      name: z.string(), 
      email: z.string().email(), 
      password: z.string(), 
    })) 
    .mutation(async ({ input }) => {
      const {name, email, password} = input;
      const passwordHash = sha256(password).toString();
      const user = await prisma.user.create({
        data: { name, email, password: passwordHash}
      })
      return user;
    }),
});