import React from "react";
import {
  ArrowRight,
  Bug,
  Clock,
  LucideIcon,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";

interface Work {
  title: string;
  desc: string;
  Icon: LucideIcon;
  circle: string; // circle bg + border + icon color
}

const works: Work[] = [
  {
    title: "Catch issues earlier",
    desc: "Identify potential bugs, security issues, and code smells before they reach production.",
    Icon: Bug,
    circle: "border-white/15 bg-white/5 text-white",
  },
  {
    title: "Understand any codebase",
    desc: "Ask questions in plain English and get context-aware answers about your code.",
    Icon: MessagesSquare,
    circle: "border-sky-400/40 bg-sky-500/15 text-sky-400",
  },
  {
    title: "Ship with confidence",
    desc: "Automated security scans and suggested fixes keep every release safe.",
    Icon: ShieldCheck,
    circle: "border-emerald-400/40 bg-emerald-500/15 text-emerald-400",
  },
  {
    title: "Save hours every week",
    desc: "Cut review time and spend more of your day building instead of debugging.",
    Icon: Clock,
    circle: "border-indigo-400/40 bg-indigo-500/15 text-indigo-300",
  },
];

function WhyDevpilot() {
  return (
    <section
      id="why-devpilot"
      className="relative isolate overflow-hidden bg-black px-4 py-16 md:px-8 md:py-24 lg:px-12"
    >
      {/* background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/devimg.png')" }}
      />

      {/* dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#05040d]/40 via-[#05040d]/80 to-transparent" />

      <div className="mx-auto max-w-[1200px]">
        {/* Eyebrow */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5">
          <span
            aria-hidden="true"
            className="block h-2 w-2 rounded-full bg-violet-400"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-violet-200">
            Why DevPilot
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[36px] font-black leading-[1.1] tracking-tight text-white md:text-[52px]">
          Built for developers
          <span className="block text-[26px] font-bold text-zinc-400 md:text-[32px]">
            who care about quality
          </span>
        </h2>

        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
          DevPilot fits into your workflow and helps you write cleaner, safer
          code without slowing you down.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {works.map(({ title, desc, Icon, circle }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-violet-400/45 hover:bg-white/[0.06]"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full border ${circle}`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-400"
          >
            Get Started Free
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyDevpilot;