import Link from "next/link";
import { Clock } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DailyButton() {
  return (
    <Link href="/daily">
      <Button variant="outline" size="icon">
        <Clock className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </Link>
  );
}
