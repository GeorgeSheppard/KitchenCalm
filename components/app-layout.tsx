import React from "react";
import { AppHeader } from "./app-header";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans">
      <AppHeader />
      {children}
    </div>
  );
}
