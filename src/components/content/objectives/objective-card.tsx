import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ObjectiveButtonDelete } from "./objective-button-delete";
import { Objective } from "@prisma/client";
import { cn } from "@/lib/utils";

export default function ObjectiveCard({ objective }: { objective: Objective }) {
  return (
    <Card className="bg-slate-100 dark:bg-gray-900">
      <CardHeader className=" flex flex-row justify-between">
        <CardTitle>{objective.name}</CardTitle>
        <Badge
          className={cn(
            {
              "bg-red-500": objective.priority === "urgent",
              "bg-orange-500": objective.priority === "high",
              "bg-yellow-500": objective.priority === "medium",
              "bg-blue-500": objective.priority === "low",
            },
            "text-xs"
          )}
        >
          {objective.priority.toUpperCase()}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{objective.detail}</p>
        <span className="text-slate-600">
          {new Date(objective.createdAt).toLocaleDateString()}
        </span>
      </CardContent>
      <CardFooter className="flex gap-x-2 md:gap-x-1 justify-between md:px-2">
        <div>
          <Link
            href={`/objectives/${objective.id}/edit`}
            className={buttonVariants({ variant: "link" })}
          >
            Tareas
          </Link>
        </div>
        <div className="flex gap-x-2 md:gap-x-1 justify-end md:justify-center">
          <Link
            href={`/objectives/${objective.id}/edit`}
            className={buttonVariants({ variant: "primary" })}
          >
            Editar
          </Link>
          <ObjectiveButtonDelete objectiveId={objective.id} />
        </div>
      </CardFooter>
    </Card>
  );
}
