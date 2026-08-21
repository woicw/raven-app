export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#f3f0e8] px-6 py-16 text-[#172019] sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 h-72 w-72 rounded-full border border-[#bbd4b5] sm:-right-12 sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-44 w-full bg-[#dfe9d8]"
      />

      <section className="relative mx-auto w-full max-w-5xl">
        <p className="mb-10 text-xs font-semibold tracking-[0.28em] text-[#557252]">
          RAVEN / 01
        </p>
        <div className="max-w-3xl border-l-2 border-[#557252] pl-6 sm:pl-10">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            沃尔沃认为
          </h1>
          <p className="mt-8 text-2xl font-medium tracking-wide text-[#466443] sm:text-3xl">
            w&apos;er
          </p>
        </div>
      </section>
    </main>
  );
}
