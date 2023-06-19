import { z } from "zod";
import { prisma } from "@/server/db";

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-PNvEJILEJcGycl7Jl7mfkymp",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const assistantRouter = createTRPCRouter({
  sendPrompt: publicProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const response = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        prompt: input
      })

      
      return response.data.choices[0]?.text
      
    })

})