import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import studio from "@/assets/about-studio.jpg";
import { PageIntro } from "@/components/site/PageIntro";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AI Video Creator & Creative Specialist" },
      { name: "description", content: "A passionate AI Video Creator turning ideas into impactful visual experiences through storytelling and modern AI tools." },
      { property: "og:title", content: "About — AI Video Creator" },
      { property: "og:description", content: "Storytelling, technology and AI-powered creativity — meet the creator behind the videos." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const reasons = [
  "Creative and original storytelling",
  "Attention to detail",
  "Modern AI-powered production techniques",
  "Professional communication",
  "Client-focused approach",
  "Commitment to quality and timely delivery",
];

function About() {
  return (
    <>
      <PageIntro eyebrow="About me" title={<>Who <em className="text-gradient-ember">I am.</em></>}>
        Hello! I'm a passionate AI Video Creator and digital creative specialist dedicated to
        transforming ideas into impactful visual experiences.
      </PageIntro>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div className="overflow-hidden rounded-2xl border border-border shadow-frame md:sticky md:top-24">
          <img src={studio} alt="A dark editing studio with monitors showing cinematic video timelines" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            My journey into AI-powered creativity started with a passion for storytelling,
            technology, and the endless possibilities of digital content creation.
          </p>
          <p>
            Today, I specialize in producing high-quality AI-generated videos that help businesses
            communicate their messages, educators deliver knowledge, and brands capture their
            audiences' attention.
          </p>
          <p>
            From cinematic storytelling to educational videos and social media content, I combine
            creativity, modern AI tools, and professional editing techniques to deliver content
            that makes an impression.
          </p>
          <blockquote className="border-l-2 border-primary py-2 pl-6 font-display text-3xl italic leading-snug text-foreground md:text-4xl">
            My goal is simple: to help individuals and businesses communicate their ideas through
            powerful visual storytelling.
          </blockquote>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow">Why work with me?</p>
          <h2 className="mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
            Every project deserves creativity, attention and a clear vision.
          </h2>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-ember text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-foreground/90">{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-muted-foreground">
            I believe every project deserves creativity, attention, and a clear understanding of
            the client's vision.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
