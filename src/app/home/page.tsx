import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const title = "Hola 👋 Ziel ";
  const description =
    "Ziel es una aplicación de seguimiento de objetivos y tareas. Puedes crear objetivos y tareas, asignarles fechas y categorías, y hacer un seguimiento de tu progreso. Ziel te ayuda a mantenerte enfocado y a alcanzar tus metas.";
  const instructions =
    'Para comenzar, haz clic en el botón "Crear Objetivo" en la barra de navegación para crear un nuevo objetivo.';

  const calltoAction =
    "Revisa tus objetivos y tareas por cumplir en la página 'Diario'.";

  const buttons = [
    {
      name: "Crear Objetivo",
      link: "/objectives/new",
    },
    {
      name: "Crear Tarea",
      link: "/tasks/new",
    },
    {
      name: "Diario",
      link: "/daily",
    },
  ];

  return (
    <div className="flex flex-col justify-center m-4 ">
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl  ">
        {title}
      </h1>
      <p className="mt-4 text-lg text-left text-foreground lg:mx-auto lg:w-3/4 2xl:w-2/3">
        {description}
      </p>
      <p className="mt-8 text-sm text-left text-foreground lg:mx-auto lg:w-3/4 2xl:w-2/3">
        {instructions}
      </p>

      <div className="flex flex-col justify-center items-center mt-8 max-w-[500px] mx-auto">
        <div className="flex flex-col xs:flex-row justify-center xs:w-auto w-full mx-auto">
          {buttons &&
            buttons.map((button) => (
              <Link
                key={button.name}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "py-2.5 px-5 me-2 mb-2 text-sm font-medium"
                )}
                href={button.link}
              >
                {button.name}
              </Link>
            ))}
        </div>
        <p className="mt-4 text-md text-left text-foreground">{calltoAction}</p>
      </div>
    </div>
  );
}
