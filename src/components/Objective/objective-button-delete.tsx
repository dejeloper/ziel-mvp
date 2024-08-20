import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { removeObjective } from "@/actions/objective-actions";

export function ObjectiveButtonDelete({
  objectiveId,
}: {
  objectiveId: number;
}) {
  return (
    <form action={removeObjective}>
      <Input type="hidden" name="objectiveId" value={objectiveId} />
      <Button variant={"destructive"} type="submit">
        Eliminar
      </Button>
    </form>
  );
}
