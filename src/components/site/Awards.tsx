import aPortrait from "@/assets/award-portrait.png.asset.json";
import aKiss from "@/assets/award-kiss.png.asset.json";
import aDance from "@/assets/award-dance.png.asset.json";

const items = [
  { src: aPortrait.url, title: "Portret — Lumina poveștii", h: 1024 },
  { src: aKiss.url, title: "Sărut la apus", h: 900 },
  { src: aDance.url, title: "Dans în lumină", h: 900 },
];

export function Awards() {
  return (
    <section className="py-24 md:py-32">
      <div className="px-6 lg:px-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Recunoaștere</span>
            <h2 className="mt-3 text-4xl md:text-5xl">Fotografii premiate</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Lucrări selectate în competiții internaționale de fotografie de
            nuntă — o colecție în continuă creștere.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((it) => (
            <figure
              key={it.title}
              className="group relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                width={1024}
                height={it.h}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="p-6 text-sm font-semibold text-white">{it.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}