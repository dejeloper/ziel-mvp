import { ObjectiveForm } from "@/components/objective/objective-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function EditObjectivePage({
  params,
}: {
  params: { id: string };
}) {
  const editObjective = await prisma.objective.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!editObjective) {
    redirect("/404");
  }

  return (
    <div className="flex justify-center items-center">
      <ObjectiveForm objective={editObjective} />
    </div>
  );
}
