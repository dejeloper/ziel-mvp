import { Suspense } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ObjectiveCardsAll,
  SkeletonObjectiveCardsAll,
} from "@/components/content/objectives";

async function ObjectivePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Listado de Objetivos</h1>
      <section className="flex justify-end items-center mb-4">
        <Link
          href="/objectives/new"
          className={buttonVariants({ variant: "primary" })}
        >
          Crear un Objetivo
        </Link>
      </section>

      <Suspense fallback={<SkeletonObjectiveCardsAll />}>
        <ObjectiveCardsAll />
      </Suspense>
    </>
  );
}

export default ObjectivePage;
