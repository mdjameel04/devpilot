import React from "react";
import { FaGithub } from "react-icons/fa";

import { ArrowRight, Check, Code2 } from "lucide-react";

interface Step {
  title: string;
  desc: string;
  icon:  React.ComponentType<{ className?: string }>;
  circle: string; // circle bg + border + icon color
}

const steps: Step[] = [
  {
    title: "Connect GitHub",
    desc: "Install the DevPilot GitHub App and select your repositories.",
    icon: FaGithub,
    circle: "border-white/15 bg-white/5 text-white",
  },
  {
    title: "We analyze your code",
    desc: "Our AI reviews pull requests, scans for issues, and provides insights.",
    icon: Code2,
    circle: "border-sky-400/40 bg-sky-500/15 text-sky-400",
  },
  {
    title: "Get actionable feedback",
    desc: "See detailed findings with explanations and suggested fixes.",
    icon: Check,
    circle: "border-indigo-400/40 bg-indigo-500/15 text-indigo-300",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-black/40 px-4  md:px-8 md:py-12 lg:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Eyebrow */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5">
          <span
            aria-hidden="true"
            className="block h-2 w-2 rounded-full bg-violet-400"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-violet-200">
            How it works
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[36px] font-black leading-[1.1] tracking-tight text-white md:text-[52px]">
          Get started in minutes
        </h2>

        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
          Connect your repository and let DevPilot do the rest.
        </p>

        {/* Steps */}
        <ol className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
          {steps.map(({ title, desc, icon: Icon, circle }, i) => (
            <React.Fragment key={title}>
              <li className="flex flex-1 items-start gap-5">
                <div className="relative shrink-0">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full border ${circle}`}
                  >
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <span className="absolute -left-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-violet-500 text-xs font-bold text-white ring-4 ring-black/40">
                    {i + 1}
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="text-base font-semibold text-white">
                    {i + 1}. {title}
                  </h3>
                  <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-zinc-400">
                    {desc}
                  </p>
                </div>
              </li>

              {i < steps.length - 1 && (
                <ArrowRight
                  className="mt-8 hidden h-5 w-5 shrink-0 text-zinc-600 lg:block"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;