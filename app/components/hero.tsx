
import Link from "next/link";

export default function HeroSection() {

    const steps = ["Connect Your Github", "AI Reviews Our Code", "Get Instant Insights"];

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#05040d] text-white">

      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/hero-img.png')",
        }}
      />

      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#05040d] via-[#05040d]/80 to-transparent" /> */}

      {/* Violet glow */}
      <div className="absolute -top-32 left-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

      {/* Hero content */}
      <div className="mx-auto flex  min-h-screen max-w-7xl items-center px-6 pb-24 pt-32 md:px-12">

        <div className="max-w-2xl">

          <span className="mb-6 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            ✦ AI-Powered Developer Platform
          </span>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Code Smater.
            <br />
            Ship <span className="text-violet-400">Faster</span>.
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Build Anything.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
            Your AI-powered developer platform to write better
            code, understand new technologies, fix bugs, and
            turn your ideas into real projects.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-xl bg-violet-600 px-7 py-4 font-semibold shadow-lg shadow-violet-600/30 transition duration-300 hover:-translate-y-1 hover:bg-violet-500"
            >
              Get Started Free ↗
            </Link>

            <Link
              href="/#features"
              className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur-md transition duration-300 hover:border-violet-400/60 hover:bg-violet-500/10"
            >
              Explore Features
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-3 text-sm text-zinc-400">
           {steps.map((step)=>(
            <li key={step} className="flex items-center gap-2 ">
               <span  className="w-2 h-2 rounded-2xl bg-violet-400 shadow-[0_0_12px_#a78bfa] " />

               {step}
            </li>
           ))}
            
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#05040d] to-transparent" />
    </section>
  );
}
