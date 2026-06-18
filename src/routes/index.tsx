import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Awards } from "@/components/site/Awards";
import { Testimonials } from "@/components/site/Testimonials";
import { Benefits } from "@/components/site/Benefits";
import { LatestStories } from "@/components/site/LatestStories";
import { Contact } from "@/components/site/Contact";
import { Blog } from "@/components/site/Blog";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iulian Corbu — Fotograf de nuntă & poveste" },
      { name: "description", content: "Iulian Corbu — fotograf de nuntă din România. Imagini documentare, cinematografice și emoționante pentru ziua cea mai importantă." },
      { property: "og:title", content: "Iulian Corbu — Fotograf de nuntă & poveste" },
      { property: "og:description", content: "Fotografie de nuntă documentară, cinematografică și emoționantă." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Awards />
        <Testimonials />
        <Benefits />
        <LatestStories />
        <Contact />
        <Blog />
        <Faq />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
