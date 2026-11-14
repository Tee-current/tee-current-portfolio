import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { CtaBand } from "@/components/site/CtaBand";
import { projects } from "@/lib/portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Explore My Creative Work" },
      { name: "description", content: "Selected AI eLearning, cinematic storytelling, AI ads, repurposing and animated explainer projects." },
      { property: "og:title", content: "Portfolio — AI Video Creator" },
      { property: "og:description", content: "A creative showcase where ideas become visual experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageIntro eyebrow="My portfolio" title={<>Explore my <em className="text-gradient-ember">creative work.</em></>}>
        Welcome to my creative showcase, where ideas become visual experiences. Every project
        represents my passion for creativity, technology, and visual storytelling.
      </PageIntro>
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-border shadow-frame ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}
            >
              <img
                src={p.image}
                alt={p.title}
                width={1280}
                height={800}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-fade-bottom" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-gradient-ember text-primary-foreground opacity-0 shadow-glow transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow">{p.category}</p>
                <h2 className="mt-2 text-3xl">{p.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
