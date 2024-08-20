"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchObjectives() {
  revalidatePath("/posts");
  return await prisma.objective.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function createObjective(formData: FormData) {
  const name = formData.get("name")?.toString();
  const detail = formData.get("detail")?.toString();
  const priority = formData.get("priority")?.toString();

  if (!name || !detail || !priority) {
    return;
  }

  await prisma.objective.create({
    data: { name, detail, priority },
  });

  revalidatePath("/objectives/");
  redirect("/objectives/");
}

export async function updateObjective(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const detail = formData.get("detail")?.toString();
  const priority = formData.get("priority")?.toString();

  if (!id || !name || !detail || !priority) return;

  await prisma.objective.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: name,
      detail: detail,
      priority: priority,
    },
  });

  revalidatePath("/objectives/");
  redirect("/objectives/");
}

export async function removeObjective(formData: FormData) {
  const objectiveId = formData.get("objectiveId")?.toString();
  if (!objectiveId) return;

  await prisma.objective.delete({
    where: {
      id: parseInt(objectiveId),
    },
  });

  revalidatePath("/objectives/");
  redirect("/objectives/");
}
