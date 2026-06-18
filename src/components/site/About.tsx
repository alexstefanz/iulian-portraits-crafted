import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="despre" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={aboutImg}
            alt="Iulian în studio"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Despre mine</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Fiecare nuntă este una specială, următoarea este despre voi!
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Sunt Iulian — un povestitor cu aparatul de fotografiat în mână.
              De peste un deceniu surprind clipele care contează: priviri,
              îmbrățișări, lacrimi de bucurie și râsete fără filtru.
            </p>
            <p>
              Cred că o fotografie bună nu se vede, ci se simte. De aceea aleg
              să rămân discret, să las momentele să se întâmple natural, iar
              povestea voastră să se scrie singură, cadru cu cadru.
            </p>
          </div>
          <a
            href="#portofoliu"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            Vezi portofoliul
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}