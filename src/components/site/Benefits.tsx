import { Camera, Truck, Award, Sparkles } from "lucide-react";

const items = [
  { icon: Camera, title: "Echipament Premium", text: "Aparate full-frame Nikon Z și obiective fixe de top pentru imagini fără compromisuri." },
  { icon: Truck, title: "Livrare Rapidă", text: "Galeria online în 7 zile, albumul tipărit în maximum 6 săptămâni." },
  { icon: Award, title: "Experiență", text: "Peste 200 de povești fotografiate în România și Europa în ultimul deceniu." },
  { icon: Sparkles, title: "Editare de Top", text: "Color grading cinematografic, atent ales pentru fiecare cadru în parte." },
];

export function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-[#262626]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">De ce eu</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Avantaje și Beneficii</h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center sm:text-left">
              <Icon className="h-10 w-10 text-accent mx-auto sm:mx-0" strokeWidth={1.25} />
              <h3 className="mt-6 text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}