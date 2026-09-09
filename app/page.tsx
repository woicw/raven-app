import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16 font-sans dark:bg-black sm:px-10">
      <section className="w-full max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-12">
        <p className="text-sm font-semibold tracking-[0.2em] text-indigo-600 uppercase dark:text-indigo-400">
          Raven
        </p>
        <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
          Build with focused, AI-assisted workflows.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Discover how Codex supports the software-development work that moves
          your projects forward.
        </p>
        <Link
          className="mt-8 inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          href="/codex"
        >
          Explore Codex
        </Link>
      </section>
    </main>
  );
}
