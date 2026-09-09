import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude | Raven",
  description: "Discover Claude's capabilities and practical use cases.",
};

const capabilities = [
  {
    title: "Think through complexity",
    description:
      "Turn a large question into clear next steps, options, and concise explanations.",
    index: "01",
  },
  {
    title: "Create with context",
    description:
      "Draft, revise, summarize, and structure work while keeping the details that matter in view.",
    index: "02",
  },
  {
    title: "Build and explore",
    description:
      "Work through code, research, and everyday tasks with an adaptable conversational partner.",
    index: "03",
  },
];

const useCases = [
  "Shape an idea into a first draft",
  "Make a dense document easier to understand",
  "Plan a project, decision, or learning path",
  "Collaborate on technical and creative work",
];

export default function ClaudePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f7f3] text-[#24211d]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link className="text-lg font-semibold tracking-[-0.03em]" href="/">
          Raven
        </Link>
        <nav aria-label="Primary navigation">
          <Link
            className="rounded-full border border-[#24211d]/15 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-[#24211d]/35 hover:bg-[#f0eee7]"
            href="/"
          >
            Back to home
          </Link>
        </nav>
      </header>

      <main>
        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-14 sm:px-10 sm:pb-32 sm:pt-20">
          <div className="absolute -right-16 top-2 -z-0 h-72 w-72 rounded-full bg-[#d8e4c7] blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -left-20 bottom-0 -z-0 h-56 w-56 rounded-full bg-[#efd6bd] blur-3xl" />
          <div className="relative z-10 max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#6d685d]">
              Meet Claude
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              A thoughtful partner for your most important work.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5d584f] sm:text-xl">
              Claude is an AI assistant designed to help you think, create, and make progress. Bring a question, a draft, or a complex task—and find a clearer way forward.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#24211d] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#3a352e]"
                href="#capabilities"
              >
                Explore capabilities
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#24211d]/15 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:border-[#24211d]/35 hover:bg-[#f0eee7]"
                href="#use-cases"
              >
                See how it can help
              </a>
            </div>
          </div>
        </section>

        <section
          className="border-y border-[#24211d]/10 bg-white/70"
          id="capabilities"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6d685d]">
                What Claude does
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Helpful at every stage of the work.
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {capabilities.map((capability) => (
                <article
                  className="border-t border-[#24211d]/15 pt-5"
                  key={capability.index}
                >
                  <p className="text-sm font-medium text-[#9a7560]">
                    {capability.index}
                  </p>
                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.03em]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5d584f]">
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32" id="use-cases">
          <div className="rounded-[2rem] bg-[#24211d] px-6 py-10 text-[#f8f7f3] sm:px-12 sm:py-14 lg:grid lg:grid-cols-[1fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cfc8b8]">
                Everyday momentum
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Start where you are.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-[#d8d2c5]">
                You do not need a perfect prompt. Share the context you have, then use the conversation to refine the result together.
              </p>
            </div>
            <ul className="mt-10 grid gap-3 lg:mt-0" role="list">
              {useCases.map((useCase) => (
                <li
                  className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-base font-medium"
                  key={useCase}
                >
                  <span aria-hidden="true" className="text-[#d8e4c7]">↗</span>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#24211d]/10 px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#6d685d] sm:flex-row sm:items-center sm:justify-between">
          <p>Explore a more considered way to work with AI.</p>
          <Link className="font-semibold text-[#24211d] hover:underline" href="/">
            Return to Raven
          </Link>
        </div>
      </footer>
    </div>
  );
}
