import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSession } from "../core/hooks/use_app_session";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppHeader() {
  const session = useAppSession();
  const router = useRouter();

  const navLinks = [
    { href: "/food", label: "Recipes" },
    { href: "/food/meal-planner", label: "Meal Planner" },
  ];

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/food" passHref>
            <span className="font-serif text-xl text-primary cursor-pointer">
              KitchenCalm
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/food"
                  ? router.pathname === "/food"
                  : router.pathname.startsWith(link.href);
              return (
                <Link key={link.href} href={link.href} passHref>
                  <span
                    className={cn(
                      "text-sm px-3 py-1.5 rounded-md cursor-pointer transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
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
