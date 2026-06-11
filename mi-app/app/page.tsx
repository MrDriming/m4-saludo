import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-zinc-950 sm:items-start rounded-xl shadow-sm dark:shadow-none">
        
        {/* Logo de Next.js superior */}
        <Image
          className="dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {/* Sección del Saludo */}
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left my-auto">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            ¡Hola! 
          </h1>
          <h2 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
            Mi nombre es <span className="text-blue-600 dark:text-blue-400">Sila</span>
          </h2>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mt-2">
            Te doy la bienvenida a mi sitio web. Este es el punto de partida para mis proyectos y diseños en Next.js.
          </p>
        </div>

        {/* Enlaces útiles (limpios y ordenados abajo) */}
        <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row mt-8 w-full sm:w-auto">
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-zinc-200 dark:border-zinc-800 px-5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación
          </a>
        </div>

      </main>
    </div>
  );
}