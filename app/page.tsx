import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f7f3] text-[#24211d]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <p className="text-lg font-semibold tracking-[-0.03em]">Raven</p>
        <nav aria-label="Primary navigation">
          <Link
            className="rounded-full border border-[#24211d]/15 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-[#24211d]/35 hover:bg-[#f0eee7]"
            href="/claude"
          >
            Discover Claude
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-20 sm:px-10 sm:py-28">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6d685d]">
            Thoughtful tools for meaningful work
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">
            Make room for better ideas.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d584f] sm:text-xl">
            Raven is a calm starting point for exploring modern tools that help
            people think, create, and move work forward.
          </p>
          <Link
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#24211d] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#3a352e]"
            href="/claude"
          >
            Meet Claude
          </Link>
        </section>
      </main>
    </div>
  );
}
