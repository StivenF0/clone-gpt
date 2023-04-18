import { z } from "zod";
import { prisma } from "@/server/db";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const assistantRouter = createTRPCRouter({
})