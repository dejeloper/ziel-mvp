import { Suspense } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ObjectiveCardsAll,
  SkeletonObjectiveCardsAll,
} from "@/components/content/objectives";
import { cn } from "@/lib/utils";

async function ObjectivePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Listado de Objetivos</h1>
      <section className="flex sm:justify-end justify-start items-center my-4 ">
        <Link
          href="/objectives/new"
          className={cn(
            buttonVariants({ variant: "primary" }),
            "sm:w-auto w-full"
          )}
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
