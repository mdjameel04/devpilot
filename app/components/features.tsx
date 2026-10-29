import { ArrowRight, LucideIcon, MessagesSquare, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import React from "react";


interface Feature {
  title: string;
  desc: string;
  Icon: LucideIcon;
  tile: String
}

const featuers: Feature[] = [
    {  
        title : "AI Code Reviews",
        desc: " Catch bugs, security issues, and bad patterns before they reach production.", 
        Icon:  Sparkles,
         tile: "bg-violet-500/15 text-violet-400",
     },
    {  
        title : "Codebase Assitant",
        desc: "Ask questions about your    ", 
        Icon: MessagesSquare,
        tile: "bg-sky-500/15 text-sky-400",
     },
    {  
        title : "security Scanner",
        desc: "Detect vulnearabilities and keep your application secure.   ", 
        Icon: ShieldCheck,
        tile: "bg-emerald-500/15 text-emerald-400",
     },
    {  
        title : "Performance insight",
        desc: "Get suggestion to improve performance and reduce technical debt. ", 
    Icon: TrendingUp,
    tile: "bg-blue-500/15 text-blue-400",
     },
]

function Features() {
  return (
    <section
      id="features"
      className="bg-black/40 px-4 py-16 md:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Eyebrow */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5">
          <span
            aria-hidden="true"
            className=" block h-2 w-2 origin-left rounded-full bg-violet-400"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-violet-200">
            Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[36px] font-black leading-[1.1] tracking-tight text-white md:text-[52px]">
          Everything you need
          <span className="block text-[26px] font-bold text-zinc-400 md:text-[32px]">
            to build better code
          </span>
        </h2>

        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
          From AI code reviews to codebase Q&amp;A, DevPilot helps you write
          cleaner, safer, and more maintainable code.
        </p>

         <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuers.map(({ title, desc, Icon: Icon, tile }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-400/40 hover:bg-white/[0.06]"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${tile}`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {desc}
              </p>
             
            <a
     href="#"
  className="inline-flex items-center gap-1 text-sm font-bold text-purple-500"
>
  Learn more
  <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>               
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Features;