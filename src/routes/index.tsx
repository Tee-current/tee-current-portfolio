import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clapperboard, GraduationCap, Scissors } from "lucide-react";
import hero from "@/assets/hero-cinematic.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { toolkit, site } from "@/lib/site";
import { projects } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — AI Video Creator & Creative Specialist` },
      { name: "description", content: "Turning ideas into extraordinary visual experiences: cinematic AI videos, eLearning content and AI video repurposing." },
      { property: "og:title", content: `${site.name} — AI Video Creator` },
      { property: "og:description", content: "Cinematic AI videos, professional eLearning content and AI-powered video repurposing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: GraduationCap, title: "AI eLearning Videos", text: "Course, training and explainer videos that make learning engaging and easy to follow." },
  { icon: Clapperboard, title: "Cinematic AI Videos", text: "Story-driven scenes, ads and documentary-style films with a cinematic finish." },
  { icon: Scissors, title: "AI Video Repurposing", text: "Long-form content reshaped into scroll-stopping Reels, TikToks and Shorts." },
];

function Index() {
  return (
    <>
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={hero}
          alt="A lone figure before a vast glowing golden screen in a dark cinematic hall"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-fade-bottom" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:pb-28">
          <p className="eyebrow animate-reveal">{site.role}</p>
          <h1 className="mt-6 max-w-5xl animate-reveal text-6xl leading-[0.95] md:text-8xl lg:text-[8.5rem] [animation-delay:120ms]">
            Turning ideas into <em className="text-gradient-ember">extraordinary</em> visual experiences.
          </h1>
          <p className="mt-8 max-w-xl animate-reveal text-lg text-foreground/80 [animation-delay:260ms]">
            I am an AI Video Creator specializing in cinematic AI videos, professional eLearning
            content, and AI-powered video repurposing. Let's bring your vision to life.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-reveal [animation-delay:380ms]">
            <Button asChild variant="hero" size="xl">
              <Link to="/portfolio">
                Explore My Work <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="reel" size="xl">
              <Link to="/contact">Let's Work Together</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...toolkit, ...toolkit, ...toolkit, ...toolkit].map((t, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-3xl italic text-muted-foreground">
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <p className="eyebrow">What I do</p>
            <h2 className="mt-4 text-5xl leading-tight md:text-6xl">Three ways to tell your story.</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            I help businesses, educators, brands, and content creators transform their ideas into
            engaging, visually compelling, and professional video experiences using modern AI
            technologies and creative storytelling.
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to="/services"
              className="group relative bg-background p-8 transition-colors hover:bg-card md:p-10"
            >
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <s.icon className="mt-8 h-8 w-8 text-primary" strokeWidth={1.4} />
              <h3 className="mt-6 text-3xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <ArrowUpRight className="absolute right-8 top-8 h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 text-5xl md:text-6xl">From the reel.</h2>
          </div>
          <Link to="/portfolio" className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-primary md:flex">
            View full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <Link key={p.title} to="/portfolio" className="group block">
              <div className="overflow-hidden rounded-2xl border border-border shadow-frame">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-2xl">{p.title}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
