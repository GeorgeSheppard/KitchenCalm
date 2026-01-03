import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from "../../../server";
import { createContext } from "../../../server/context";

export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError(opts) {
    console.error(`Error: ${opts.error}`);
  },
  batching: {
    enabled: false
  }
});
