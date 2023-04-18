import { createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "@/server/api/routers/auth";
import { threadsRouter } from "./routers/threads";
import { assistantRouter } from "./routers/openaiApi";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  threads: threadsRouter,
  assistant: assistantRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
