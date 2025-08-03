import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { db } from "./db";
import { auth, CustomSession } from "./auth";

export async function createContext(
  ctx: trpcNext.CreateNextContextOptions
) {
  const { req, res } = ctx
  const session: CustomSession | null = await auth(req, res)

  return {
    session,
    db,
    usePrisma: true
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
