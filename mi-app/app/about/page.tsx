import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-zinc-950 sm:items-start rounded-xl shadow-sm dark:shadow-none">
        
        {/* Encabezado de la página */}
        <div className="flex flex-col items-center gap-2 sm:items-start w-full border-b border-zinc-100 dark:border-zinc-800 pb-6 mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            Sobre mí
          </h1>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Un poco de mi historia
          </p>
        </div>

        {/* Sección de la Bio Corta */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left my-auto w-full">
          <div className="space-y-4 max-w-xl">
            <p className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
              ¡Hola de nuevo! Mi nombre es <span className="text-blue-600 dark:text-blue-400">Sila</span>.
            </p>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Tengo 18, estoy en mi ultimo año de secundaria y ahora mismo estoy haciendo pasantias en la empresa Helipagos
            </p>
          </div>
        </div>

        {/* Botón para volver al Inicio */}
        <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row mt-12 w-full sm:w-auto">
          <Link
            className="flex h-10 items-center justify-center rounded-full bg-zinc-900 px-6 text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="/"
          >
            ← Volver al inicio
          </Link>
        </div>

      </main>
    </div>
  );
}