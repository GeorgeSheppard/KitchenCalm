/**
 * IndexedDB persister for React Query
 * Automatically persists and restores query cache to/from IndexedDB
 * This eliminates loading flashes by restoring data before queries start
 */

import { PersistedClient, Persister } from '@tanstack/react-query-persist-client';
import { del, get, set } from 'idb-keyval';

const PERSIST_KEY = 'react-query-cache';

/**
 * Creates an IndexedDB persister for React Query
 * Uses idb-keyval for simple key-value storage
 * Excludes auth session queries from persistence
 */
export function createIDBPersister(): Persister {
  return {
    persistClient: async (client: PersistedClient) => {
      // Filter out auth session queries before persisting
      const filteredClient = {
        ...client,
        clientState: {
          ...client.clientState,
          queries: client.clientState.queries.filter(
            (query) => !query.queryKey.includes('auth')
          ),
        },
      };
      await set(PERSIST_KEY, filteredClient);
    },
    restoreClient: async () => {
      return await get<PersistedClient>(PERSIST_KEY);
    },
    removeClient: async () => {
      await del(PERSIST_KEY);
    },
  };
}

/**
 * Clear the persisted React Query cache
 * Used when user logs out or session expires
 * @returns true if cache existed and was cleared, false if no cache existed
 */
export async function clearPersistedCache(): Promise<boolean> {
  const existingCache = await get<PersistedClient>(PERSIST_KEY);
  const hadCache = existingCache !== undefined;

  if (hadCache) {
    await del(PERSIST_KEY);
  }

  return hadCache;
}
