
"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const navItems = [
  { name: "Features", path: "/#features" },
  { name: "Topics", path: "/#topics" },
  { name: "How it works", path: "/#works" },
  { name: "Pricing", path: "/#pricing" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="relative mx-auto max-w-7xl">

        {/* Main Navbar */}
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-transparent px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl md:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
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

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-violet-500/10 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.7)] transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-300 transition-colors hover:text-violet-400"
            >
              <FaGithub size={24} />
            </Link>

            <Link
              href="/sign-in"
              className="rounded-xl px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 active:scale-95"
            >
              Sign In
            </Link>

            <Link
              href="/#get-started"
              className="rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:bg-violet-400 hover:shadow-violet-500/40 active:scale-95"
            >
              Get Started <span className="ml-1.5">↗</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown — outside the flex navbar */}
        <div
          className={`absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${
            menuOpen
              ? "max-h-[420px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 p-3">

            {/* Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:bg-violet-500/10 hover:text-violet-300"
              >
                {item.name}
              </Link>
            ))}

            <div className="my-2 border-t border-white/10" />

            {/* GitHub */}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-violet-300"
            >
              <FaGithub size={20} />
              GitHub
            </Link>

            {/* Sign In */}
            <Link
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-violet-300"
            >
              Sign In
            </Link>

            {/* Get Started */}
            <Link
              href="/#get-started"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-xl bg-violet-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-colors hover:bg-violet-400"
            >
              Get Started ↗
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
