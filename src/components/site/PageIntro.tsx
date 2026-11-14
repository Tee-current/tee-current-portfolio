import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="eyebrow animate-reveal">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl animate-reveal text-5xl leading-[1.02] md:text-7xl lg:text-8xl [animation-delay:120ms]">
          {title}
        </h1>
        {children && (
          <div className="mt-8 max-w-2xl animate-reveal text-lg text-muted-foreground [animation-delay:240ms]">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
