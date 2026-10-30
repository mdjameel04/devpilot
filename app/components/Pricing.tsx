"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

type Billing = "monthly" | "yearly";

interface Plan {
  name: string;
  desc: string;
  price: Record<Billing, number>;
  features: string[];
  cta: string;
  popular?: boolean;
  card: string; // card border/bg
  btn: string; // button style
}

const plans: Plan[] = [
  {
    name: "Free",
    desc: "Perfect for individual developers",
    price: { monthly: 0, yearly: 0 },
    features: [
      "5 AI code reviews per month",
      "Basic code review",
      "GitHub integration",
      "Community support",
    ],
    cta: "Get started",
    card: "border-white/10 bg-white/[0.03]",
    btn: "bg-white text-black hover:bg-zinc-200",
  },
  {
    name: "Pro",
    desc: "For professional developers",
    price: { monthly: 15, yearly: 10 },
    features: [
      "Unlimited code reviews",
      "Advanced AI analysis",
      "Codebase Q&A",
      "Security scanning",
      "Priority support",
    ],
    cta: "Start 14-day free trial",
    popular: true,
    card: "border-violet-500 bg-violet-500/[0.06] shadow-[0_0_40px_-10px_#8b5cf6]",
    btn: "bg-violet-500 text-white hover:bg-violet-400",
  },
  {
    name: "Team",
    desc: "For teams and organizations",
    price: { monthly: 49, yearly: 34 },
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Organization-wide analytics",
      "Custom review rules",
      "Dedicated support",
    ],
    cta: "Contact sales",
    card: "border-white/10 bg-white/[0.03]",
    btn: "border border-violet-500 text-violet-300 hover:bg-violet-500/10",
  },
];

function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section
      id="pricing"
      className="bg-black/40 px-4 py-16 md:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Eyebrow */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5">
          <span
            aria-hidden="true"
            className="block h-2 w-2 rounded-full bg-violet-400"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-violet-200">
            Pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[36px] font-black leading-[1.1] tracking-tight text-white md:text-[52px]">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
          Choose the plan that fits your needs. Start for free and upgrade
          anytime.
        </p>

        {/* Billing toggle */}
        <div
          role="group"
          aria-label="Billing period"
          className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1"
        >
          <button
            type="button"
            aria-pressed={billing === "monthly"}
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              billing === "monthly"
                ? "bg-violet-500 text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={billing === "yearly"}
            onClick={() => setBilling("yearly")}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
              billing === "yearly"
                ? "bg-violet-500 text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Yearly
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-400">
              Save 30%
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${plan.card}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-5 rounded-full bg-violet-500 px-3 py-1 text-[11px] font-semibold text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{plan.desc}</p>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">
                  ${plan.price[billing]}
                </span>
                <span className="text-sm text-zinc-400">/ month</span>
              </p>
              {billing === "yearly" && plan.price.yearly > 0 && (
                <p className="mt-1 text-xs text-zinc-500">Billed yearly</p>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${plan.btn}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;