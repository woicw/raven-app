import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeepSeek",
  description: "An introduction to DeepSeek and practical AI-assisted work.",
};

const useCases = [
  {
    title: "Explore ideas",
    description:
      "Use a conversational starting point to clarify questions, compare approaches, and build useful context for a task.",
  },
  {
    title: "Support technical work",
    description:
      "Bring AI into focused development workflows for drafting, reviewing, and iterating on implementation details.",
  },
  {
    title: "Keep momentum",
    description:
      "Turn a rough request into clearer next steps while keeping people in control of important decisions.",
  },
];

export default function DeepSeekPage() {
  return (
    <main className="min-h-full bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-white">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10"
        >
          <Link className="text-lg font-semibold tracking-tight" href="/">
            Raven
          </Link>
          <div className="flex items-center gap-1">
            <Link
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
              href="/"
            >
              Home
            </Link>
            <Link
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
              href="/codex"
            >
              Codex
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-indigo-600 uppercase dark:text-indigo-400">
            DeepSeek
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Bring a thoughtful AI partner into everyday work.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            DeepSeek offers a way to explore questions, shape ideas, and
            support focused technical work. Use it as a practical starting
            point, then apply your team&apos;s context and judgement to the result.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              href="/"
            >
              Start with Raven
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
              href="/codex"
            >
              Explore Codex
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Ways to use DeepSeek
          </p>
          <ol className="mt-6 space-y-5">
            {useCases.map((useCase, index) => (
              <li className="flex gap-4" key={useCase.title}>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-semibold">{useCase.title}</h2>
                  <p className="mt-1 leading-7 text-zinc-600 dark:text-zinc-400">
                    {useCase.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Make AI support fit the way you work.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
            Pair DeepSeek with Raven&apos;s focused workflows to keep exploration,
            implementation, and review connected to the goals that matter.
          </p>
        </div>
      </section>
    </main>
  );
}
