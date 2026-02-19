import Link from "next/link";
import { useAppSession } from "../core/hooks/use_app_session";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";

export function AppHeader() {
  const session = useAppSession();

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/food" passHref>
          <span className="font-serif text-xl text-primary cursor-pointer">KitchenCalm</span>
        </Link>
        <div>
          {session.loading ? null : session.id ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => signOut()}
              className="text-muted-foreground"
            >
              <LogOut className="size-4 mr-2" />
              Sign out
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => signIn("cognito")}
              className="text-muted-foreground"
            >
              <LogIn className="size-4 mr-2" />
              Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
