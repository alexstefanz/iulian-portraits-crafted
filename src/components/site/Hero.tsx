import iulianAsset from "@/assets/iulian-corbu2.png.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-animated-bg relative flex min-h-screen items-end justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Massive background typography */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 flex flex-col items-center justify-start pt-52 sm:pt-56 px-4 z-[1]">
        <h1
          aria-hidden
          className="font-display font-light leading-[0.85] text-center whitespace-nowrap"
          style={{ fontSize: "clamp(2rem, 7.5vw, 8.5rem)" }}
        >
          <span className="block text-white">FOTOGRAF</span>
          <span className="block">
            <span className="inline-block text-[#F6AD1A]">CORBU IULIAN</span>
          </span>
        </h1>
      </div>

      <div className="relative z-[2] flex items-end justify-center">
        <img
          src={iulianAsset.url}
          alt="Iulian Corbu — fotograf"
          className="h-[50vh] sm:h-[56vh] md:h-[64vh] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* CTA buttons */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 w-full sm:w-auto max-w-md">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
        >
          Ai nevoie de un fotograf?
        </a>
        <a
          href="#despre"
          className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Cine sunt eu
        </a>
      </div>
    </section>
  );
}