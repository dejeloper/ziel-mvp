import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createObjective, updateObjective } from "@/actions/objective-actions";
import { Objective } from "@prisma/client";

export function ObjectiveForm({ objective }: { objective?: Objective }) {
  const functionAction = objective?.id ? updateObjective : createObjective;

  return (
    <form action={functionAction}>
      <input type="hidden" name="id" value={objective?.id} />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            {objective?.id ? "Actualizar Objetivo" : "Crear Objetivo"}
          </CardTitle>
          <CardDescription>
            {objective?.id
              ? "Mejore el formulario para mejorar su objetivo"
              : "Complete el formulario para arrancar con un nuevo objetivo."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                placeholder="Objetivo que quieres alcanzar"
                defaultValue={objective?.name}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="detail">Detalle</Label>
              <Textarea
                id="detail"
                name="detail"
                placeholder="Puedes dar más detalles de lo que quieres lograr. Intentalo."
                defaultValue={objective?.detail || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Prioridad</Label>
              <Select name="priority" defaultValue={objective?.priority}>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="¿Cuánto importa este objetivo?" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Baja</SelectItem>
                  <SelectItem value="medium">Media</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                  <SelectItem value="urgent">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link
            href="/objectives"
            className={buttonVariants({ variant: "outline" })}
          >
            Cancel
          </Link>
          <Button type="submit">
            {objective?.id ? "Actualizar Objetivo" : "Crear Objetivo"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
