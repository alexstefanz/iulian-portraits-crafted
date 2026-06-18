import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Iulian a surprins fiecare emoție a zilei noastre. Privind albumul, retrăim totul din nou — și plângem fericiți de fiecare dată.",
    name: "Andreea & Mihai",
    event: "Nuntă, Brașov",
  },
  {
    quote:
      "Discret, atent, mereu acolo la momentul potrivit. Recomandăm Iulian oricui își dorește fotografii care să povestească ceva real.",
    name: "Ioana & Vlad",
    event: "Nuntă, București",
  },
  {
    quote:
      "Profesionalism, suflet și o privire de artist. Ne-a făcut să ne simțim confortabil în fața aparatului — și asta se vede.",
    name: "Maria & Cristian",
    event: "Cununie, Sibiu",
  },
];

export function Testimonials() {
  return (
    <section id="testimoniale" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Mărturii</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Ce spun Protagoniștii</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-card p-8 border border-white/5 transition-transform hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-accent" />
              <p className="mt-6 italic text-muted-foreground leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.event}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}