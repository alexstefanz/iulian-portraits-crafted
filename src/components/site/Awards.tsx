import a1 from "@/assets/award1.jpg";
import a2 from "@/assets/award2.jpg";
import a3 from "@/assets/award3.jpg";
import a4 from "@/assets/award4.jpg";
import a5 from "@/assets/award5.jpg";

const items = [
  { src: a1, title: "Best Wedding Story — 2024", h: 1280 },
  { src: a2, title: "Fearless Award — 2023", h: 1024 },
  { src: a3, title: "ISPWP — Top 20 Romance", h: 1440 },
  { src: a4, title: "MyWed Award — Reception", h: 1024 },
  { src: a5, title: "Junebug — Engagement", h: 1280 },
];

export function Awards() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
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
              className="group relative overflow-hidden rounded-xl break-inside-avoid"
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                width={1024}
                height={it.h}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
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