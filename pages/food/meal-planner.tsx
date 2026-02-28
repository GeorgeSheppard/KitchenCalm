import { ConnectedMealPlanner } from "../../components/connected-meal-planner";
import { useAppSession } from "../../core/hooks/use_app_session";
import { useRouter } from "next/router";

export default function MealPlannerPage() {
  const session = useAppSession();
  const router = useRouter();

  // Redirect to home page if not authenticated
  if (!session.loading && !session.isAuthenticated) {
    router.push("/");
    return null;
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <ConnectedMealPlanner />
    </main>
  );
}
