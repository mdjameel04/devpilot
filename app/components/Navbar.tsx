
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Features", path: "/#features" },
  { name: "Topics", path: "/#topics" },
  { name: "How it works", path: "/#works" },
  { name: "Pricing", path: "/#pricing" },
];

function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className="
          mx-auto flex max-w-7xl items-center justify-between
          rounded-2xl border border-white/10
          bg-black/75 px-4 py-3
          shadow-lg shadow-black/20 backdrop-blur-xl
          md:px-8
        "
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/logo1.png"
            alt="DevPilot logo"
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:rotate-6"
          />

          <h1 className="text-xl font-bold tracking-tight text-white">
            Dev
            <span className="text-violet-400 transition-colors duration-300 group-hover:text-violet-300">
              Pilot
            </span>
          </h1>
        </Link>

        {/* Navigation links */}
        <div
          className="
            hidden items-center gap-1 rounded-xl
            border border-white/10 bg-white/[0.03] p-1.5
            md:flex
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className=" group relative rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-violet-500/10 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400  "  >
              {item.name}

              {/* Animated underline */}
              <span
                className=" absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.7)] transition-all duration-300 group-hover:w-1/2"
              />
            </Link>
          ))}
        </div>

        {/* CTA button */}\
        <div  className=" flex items-center gap-5">
      
        <Link  href={"/sign-in"}
        className=" rounded-xl px-4 py-2 text-sm font-medium text-white shadow-lg  shadow-violet-500/20 transition-all duration-300 hover:bg-gray-400 hover:shadow-gray-500/40 active:scale-95 "
        >
        sign-in
        </Link>

        <Link
          href="/#get-started"
          className=" rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:bg-violet-400 hover:shadow-violet-500/40 active:scale-95 ">
          Get Started
          <span className="ml-1.5">↗</span>
        </Link>
        </div>


      </div>
    </nav>
  );
}

export default Navbar;
