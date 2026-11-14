import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Work Together" },
      { name: "description", content: "Need a cinematic AI video, an educational video or social media content? Get in touch." },
      { property: "og:title", content: "Let's Work Together" },
      { property: "og:description", content: "Have an idea? Let's make it happen — reach out by email, Fiverr, Upwork or LinkedIn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageIntro eyebrow="Let's work together" title={<>Have an idea? <em className="text-gradient-ember">Let's make it happen.</em></>}>
        Whether you need a cinematic AI video, an engaging educational video, or professional
        social media content, I'm ready to help you bring your vision to life.
      </PageIntro>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="eyebrow mb-6">Get in touch</p>
        <ul className="border-t border-border">
          {site.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-border py-8 md:grid-cols-[200px_1fr_auto]"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{l.label}</span>
                <span className="col-span-2 row-start-2 font-display text-3xl transition-colors group-hover:text-primary md:col-span-1 md:row-start-1 md:text-5xl">
                  {l.value}
                </span>
                <ArrowUpRight className="h-7 w-7 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 max-w-3xl font-display text-4xl italic leading-snug md:text-5xl">
          Let's turn your next big idea into an <span className="text-gradient-ember">unforgettable</span> visual experience.
        </p>
      </section>
    </>
  );
}
