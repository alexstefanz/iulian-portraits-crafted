import { useState, type FormEvent } from "react";
import contactImg from "@/assets/contact.jpg";

function Field({
  id,
  label,
  type = "text",
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const [value, setValue] = useState("");
  const filled = value.length > 0;
  const common =
    "peer w-full bg-transparent border-0 border-b border-white/30 px-0 pt-6 pb-2 text-foreground placeholder-transparent focus:border-accent focus:outline-none focus:ring-0 transition-colors";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={3}
          placeholder={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${common} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={common}
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 text-muted-foreground transition-all duration-200 ${
          filled ? "top-0 text-xs text-accent" : "top-6 text-base"
        } peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent`}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("contact form submitted", data);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl min-h-[420px]">
          <img
            src={contactImg}
            alt="Iulian în lucru"
            loading="lazy"
            width={1024}
            height={1440}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="font-display text-3xl text-white">Hai să povestim.</h3>
            <p className="mt-2 text-sm text-white/80">
              Răspund în maximum 24 de ore lucrătoare.
            </p>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Contact</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Hai să ne cunoaștem</h2>
          <form onSubmit={onSubmit} className="mt-10 space-y-2">
            <Field id="nume" label="Nume" />
            <Field id="email" label="Email" type="email" />
            <Field id="telefon" label="Telefon" type="tel" />
            <Field id="data" label="Data evenimentului" type="date" />
            <Field id="mesaj" label="Mesajul tău" textarea />
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-accent py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.01]"
            >
              Trimite mesajul
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}