import "../styles/globals.css";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import * as React from "react";
import { AppLayout } from "../components/app-layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 60 * 1000,
      cacheTime: 1 * 60 * 60 * 1000, // 1 hour
      retry: 1,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      structuralSharing: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

export interface IKitchenCalmProps {
  Component: React.JSXElementConstructor<any>;
  pageProps: any & { session: Session };
}

function KitchenCalm(props: IKitchenCalmProps) {
  const { Component } = props;
  const { session, ...pageProps } = props.pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SessionProvider session={session}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default KitchenCalm;
