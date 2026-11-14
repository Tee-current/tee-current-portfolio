import { createFileRoute } from "@tanstack/react-router";
import { Clapperboard, GraduationCap, Scissors } from "lucide-react";
import elearning from "@/assets/work-elearning.jpg";
import cinematic from "@/assets/work-cinematic.jpg";
import repurpose from "@/assets/work-repurpose.jpg";
import { PageIntro } from "@/components/site/PageIntro";
import { CtaBand } from "@/components/site/CtaBand";
import { toolkit } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI eLearning, Cinematic AI & Video Repurposing" },
      { name: "description", content: "AI eLearning videos, cinematic AI videos and AI video repurposing for Reels, TikTok and YouTube Shorts." },
      { property: "og:title", content: "AI Video Services" },
      { property: "og:description", content: "eLearning, cinematic storytelling and short-form repurposing — powered by modern AI tools." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: GraduationCap,
    title: "AI eLearning Videos",
    image: elearning,
    text: "I create professional educational and training videos that make learning more engaging, accessible, and easier to understand.",
    items: ["Online course videos", "Corporate training videos", "AI presenter and spokesperson videos", "Educational explainer videos", "Course introduction videos", "Training and instructional content"],
  },
  {
    icon: Clapperboard,
    title: "Cinematic AI Videos",
    image: cinematic,
    text: "I transform creative concepts into visually captivating cinematic experiences using advanced AI video generation and editing techniques.",
    items: ["Cinematic AI storytelling", "Realistic AI-generated scenes", "Historical and documentary-style videos", "AI advertisements and promotional videos", "Product and brand storytelling", "Creative short-form cinematic content"],
  },
  {
    icon: Scissors,
    title: "AI Video Repurposing",
    image: repurpose,
    text: "I help content creators and businesses turn existing long-form content into engaging short-form videos suitable for different social media platforms.",
    items: ["Long-form to short-form video conversion", "Instagram Reels", "TikTok videos", "YouTube Shorts", "Engaging captions and subtitles", "Social media content optimization"],
  },
];

function Services() {
  return (
    <>
      <PageIntro eyebrow="My services" title={<>Video, <em className="text-gradient-ember">reimagined</em> with AI.</>}>
        Three focused services, one goal: video that informs, moves and gets watched.
      </PageIntro>

      <section className="mx-auto max-w-7xl space-y-24 px-6 pb-24">
        {services.map((s, i) => (
          <article key={s.title} className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className={`overflow-hidden rounded-2xl border border-border shadow-frame ${i % 2 ? "md:order-2" : ""}`}>
              <img src={s.image} alt={s.title} width={1280} height={800} loading="lazy" className="aspect-[16/11] w-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <span className="h-px flex-1 bg-border" />
                <s.icon className="h-6 w-6 text-primary" strokeWidth={1.4} />
              </div>
              <h2 className="mt-6 text-5xl leading-tight">{s.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{s.text}</p>
              <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 border-b border-border pb-3 text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">My creative toolkit</p>
            <h2 className="mt-4 text-5xl leading-tight">The tools behind the magic.</h2>
            <p className="mt-6 text-muted-foreground">
              I continuously explore new AI technologies and creative workflows to improve the
              quality of my work.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {toolkit.map((t) => (
              <div key={t} className="flex aspect-[4/3] items-center justify-center bg-background p-6 text-center font-display text-2xl transition-colors hover:bg-card hover:text-primary">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
