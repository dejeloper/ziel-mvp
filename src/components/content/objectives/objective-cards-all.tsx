import { fetchObjectives } from "@/actions/objective-actions";
import ObjectiveCard from "./objective-card";

export async function ObjectiveCardsAll() {
  const objectives = await fetchObjectives();

  return (
    <section className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {objectives.map((objective) => (
        <ObjectiveCard objective={objective} key={objective.id} />
      ))}
    </section>
  );
}
