import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 pb-8 pt-14 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-white">
              DevPilot
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              AI-powered code reviews, security scans, and codebase Q&amp;A for
              modern developers.
            </p>
            <a
              href="https://github.com"
              aria-label="DevPilot on GitHub"
              className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-violet-400/40 hover:text-white"
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Link columns */}
          {columns.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white">{heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-400 transition hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-zinc-500">
          ©  DevPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;