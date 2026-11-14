import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Creative Process — How I Work" },
      { name: "description", content: "Five steps from understanding your vision to final delivery of your AI video." },
      { property: "og:title", content: "How I Work — Creative Process" },
      { property: "og:description", content: "Vision, concept, AI production, editing and final delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Process,
});

const steps = [
  { title: "Understanding Your Vision", text: "I start by understanding your goals, target audience, ideas, and project requirements." },
  { title: "Planning and Concept Development", text: "I develop the creative direction, script, visual concepts, and production approach." },
  { title: "AI Video Production", text: "I use suitable AI tools to generate scenes, characters, visuals, and video sequences." },
  { title: "Editing and Refinement", text: "I refine the footage, improve transitions, add captions, sound, and other necessary elements." },
  { title: "Final Delivery", text: "I deliver the completed video according to the agreed specifications and project requirements." },
];

function Process() {
  return (
    <>
      <PageIntro eyebrow="My creative process" title={<>How <em className="text-gradient-ember">I work.</em></>}>
        A clear, collaborative path from first idea to finished film.
      </PageIntro>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <ol className="border-t border-border">
          {steps.map((s, i) => (
            <li key={s.title} className="group grid gap-4 border-b border-border py-10 transition-colors md:grid-cols-[160px_1fr_1fr] md:items-baseline md:gap-10">
              <span className="font-display text-6xl text-muted-foreground transition-colors group-hover:text-primary md:text-7xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-3xl md:text-4xl">{s.title}</h2>
              <p className="text-lg text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}
