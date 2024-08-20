import ObjectiveCard from "@/components/Objective/objective-card";
import { buttonVariants } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";

async function ObjectivePage() {
  const objectives = await prisma.objective.findMany();

  return (
    <>
      <h1 className="text-4xl font-bold text-center  ">Listado de Objetivos</h1>
      <section className="flex justify-end items-center mb-4">
        <Link
          href="/objectives/new"
          className={buttonVariants({ variant: "primary" })}
        >
          Crear un Objetivo
        </Link>
      </section>
      <section className="grid grid-cols-2 gap-4">
        {objectives.map((objective) => (
          <ObjectiveCard objective={objective} key={objective.id} />
        ))}
      </section>
    </>
  );
}

export default ObjectivePage;
