import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-4 py-16 md:px-8 md:py-24 lg:px-12">
      {/* background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/footer.png')" }}
      />

      {/* overlay: center content ke liye */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(5,4,13,0.85)_0%,rgba(5,4,13,0.55)_60%,rgba(5,4,13,0.3)_100%)]" />

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-black" />

      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-[36px] font-black leading-[1.1] tracking-tight text-white md:text-[52px]">
          Ready to write better code?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          Join developers who use DevPilot to build safer, cleaner, and more
          maintainable code.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Primary */}
          <Link
            href="/sign-up"
            className="group inline-flex h-12 items-center rounded-xl border border-white/80 bg-gradient-to-b from-white to-[#e9e9f5] px-6 text-sm font-semibold text-[#17172e] shadow-[0_0_25px_rgba(139,92,246,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_35px_rgba(139,92,246,0.4)]"
          >
            Get started for free
            <ArrowRight
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          {/* Secondary */}
          <Link
            href="#showcase"
            className="group inline-flex h-12 items-center rounded-xl border border-white/10 bg-[#080b17] px-5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-[#11152a]"
          >
            <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
              <Play className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
            </span>
            Watch demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;