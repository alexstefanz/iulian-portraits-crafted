import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img6 from "@/assets/testimonial-6.png.asset.json";
import img7 from "@/assets/testimonial-7.png.asset.json";
import img8 from "@/assets/testimonial-8.png.asset.json";
import img9 from "@/assets/testimonial-9.png.asset.json";
import img10 from "@/assets/testimonial-10.png.asset.json";

const items = [
  {
    image: img6.url,
    quote:
      "Un om super fain, plin de energie care te face sa te simti in largul tau si sa te distrezi! Ne-a facut cele mai frumoase poze multumim si recomandam cu drag!",
    name: "Monica Neagu",
    role: "",
  },
  {
    image: img7.url,
    quote:
      "Pentru ca stiu foarte bine ca detaliile conteaza, mai ales cele surprinse de ochiul unui fotograf intr-un moment atat de important cum e ziua nuntii. Iar Iulian categoric stie sa le surprinda, odata cu emotiile unei astfel de zile. Bonus: e un tip cu un vibe foarte bun, cu care clientii comunica usor, friendly. Recomand!",
    name: "Alina Alexandroaie",
    role: "Magenta Events",
  },
  {
    image: img8.url,
    quote:
      'Iulian "scrie" basme, dar nu asa cum va asteptati de obicei sa gasiti un basm, scris pe foi, el scrie basme cu ajutorul fotografiilor sale. Acum 2 ani am avut nevoie de echipa foto-video pentru botezul micutului meu baietel. Eram putin stresata pentru ca nu suntem amatori de stat la poze si filmari mai ales de oameni care fac din treaba asta o profesie, dar cand l-am cunoscut la eveniment am fost sigura ca totul va fi in regula si va iesi asa cum am sperat. Iulian e o persoana calda care reuseste sa surprinda momentele cheie fara sa isi faca simtita prezenta puternic. Este un om calm si mereu atent la cerintele celor cu care lucreaza. Asculta cu rabdare orice dorinta ai avea. Cu mult calm si rabdare ne-a ghidat pe toti, ne-a ascultat, s-a amuzat impreuna cu noi dar a si muncit uneori parca nevazut printre invitati pentru a surprinde tot ce e mai important si mai frumos la nunta.',
    name: "Elena Antoce",
    role: "",
  },
  {
    image: img9.url,
    quote:
      "Plin de viata, creativ, rabdator, amabil si nu in ultimul rand, un mega fotograf. As mai putea adauga multe insa va las si pe voi sa il descoperiti pe Iulian. Fotografiile de la nunta noastra ne reprezinta intru totul si credem ca am castigat un prieten la care vom apela ori de cate ori vom avea nevoie. Mulțumim frumos pentru devotamentul tau si pentru momentele surprinse si imortalizate. Recomandam cu mare drag! THE BEST!",
    name: "Andreea Ioana",
    role: "",
  },
  {
    image: img10.url,
    quote:
      "Sa scrii un review despre un fotograf si serviciile oferite de el este destul de impersonal. Asadar, acesta nu este un review, ci este o descriere a colaborarii cu Iulian. Am avut placerea de a-l avea alaturi pe Iulian in ziua nuntii noastre. Cu naturalete si prietenie ne-a ajutat sa ne relaxam si ne-a ghidat pas cu pas pe tot parcursul zilei. Da, multi dintre noi uitam rapid ziua nuntii din cauza oboselii, emotiilor, dar cand primesti pozele dupa cateva luni iti reamintesti cu placere fiecare moment al nuntii si ramai cu zambetul pe buze intreaga zi. Multumim, Iulian!",
    name: "Bianca Alexa",
    role: "",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const go = (n: number) => setIndex((n + total) % total);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 8000);
    return () => clearInterval(id);
  }, [total]);

  const t = items[index];

  return (
    <section id="testimoniale" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Mărturii</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Ce spun Protagoniștii</h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 items-stretch rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <div className="order-2 md:order-1 flex flex-col justify-center p-8 md:p-12">
            <p className="text-base md:text-lg italic text-muted-foreground leading-relaxed max-h-[420px] overflow-y-auto pr-2">
              "{t.quote}"
            </p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-semibold text-foreground">{t.name}</p>
              {t.role && <p className="text-sm text-muted-foreground">{t.role}</p>}
            </div>
          </div>
          <div className="order-1 md:order-2 relative min-h-[320px] md:min-h-[500px]">
            <img
              src={t.image}
              alt={t.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => go(index - 1)}
            aria-label="Anterior"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-foreground transition hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-accent" : "w-4 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            aria-label="Următor"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-foreground transition hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}