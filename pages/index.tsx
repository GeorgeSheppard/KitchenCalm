import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Button onClick={() => router.push("/food")}>Go to food</Button>
    </div>
  );
}
