import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grain relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-10 md:p-16">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary-glow/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <p className="eyebrow relative">Let's work together</p>
        <h2 className="relative mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
          Have an idea? <em className="text-gradient-ember">Let's make it happen.</em>
        </h2>
        <div className="relative mt-8">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get in Touch <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
