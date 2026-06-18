import b1 from "@/assets/blog1.jpg";
import b2 from "@/assets/blog2.jpg";
import b3 from "@/assets/blog3.jpg";

const posts = [
  { src: b1, title: "Cum alegi verighetele perfecte", excerpt: "Un mic ghid pentru cuplurile care vor ceva memorabil, dincolo de trenduri." },
  { src: b2, title: "Ce întreb la fiecare ședință foto", excerpt: "Lista mea de întrebări care transformă o ședință obișnuită într-o poveste." },
  { src: b3, title: "Buchetul miresei: alegeri inspirate", excerpt: "De la peonia clasică la compoziții moderne — ce funcționează în fotografii." },
];

export function Blog() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Jurnal</span>
            <h2 className="mt-3 text-4xl md:text-5xl">Articole</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Gânduri, sfaturi și povești din spatele aparatului.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-2xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                Citește mai mult <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}