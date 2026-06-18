import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Cât costă o nuntă fotografiată?", a: "Pachetele pornesc de la 1.500€ și sunt personalizate în funcție de durată, locație și livrabile." },
  { q: "Cât durează până primesc fotografiile?", a: "Galeria online completă în 7 zile, iar albumul tipărit în maximum 6 săptămâni de la eveniment." },
  { q: "Călătorești pentru evenimente?", a: "Da, fotografiez în toată România și în Europa. Costurile de transport se stabilesc separat." },
  { q: "Oferi și sesiuni Save the Date?", a: "Sigur! Recomand o sesiune înainte de nuntă — ne cunoaștem mai bine și obținem cadre minunate." },
  { q: "Cum rezerv data?", a: "Trimite-mi un mesaj prin formular. După o scurtă discuție, rezerv data printr-un avans simbolic." },
];

export function Faq() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Întrebări</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Întrebări frecvente</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-white/10"
            >
              <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline hover:text-accent data-[state=open]:text-accent [&>svg]:text-accent">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}