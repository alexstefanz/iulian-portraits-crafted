import s1 from "@/assets/story1.jpg";
import s2 from "@/assets/story2.jpg";
import s3 from "@/assets/story3.jpg";

const items = [
  { src: s1, title: "Andreea & Mihai" },
  { src: s2, title: "Ioana & Vlad" },
  { src: s3, title: "Maria & Cristian" },
];

export function LatestStories() {
  return (
    <section id="portofoliu" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Portofoliu</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Ultimele povești</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((s) => (
            <a
              key={s.title}
              href="#contact"
              className="group relative block aspect-[3/4] overflow-hidden rounded-xl"
            >
              <img
                src={s.src}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={1366}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/55">
                <span className="font-display text-3xl text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {s.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}