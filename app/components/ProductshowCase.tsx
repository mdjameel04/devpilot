import React from "react";
import {
  AlertCircle,
  AlertTriangle,
  BarChart3,
  Bell,
  ChevronRight,
  Code2,
  ExternalLink,
  FileCode2,
  FolderGit2,
  GitBranch,
  GitPullRequest,
  LayoutDashboard,
  LucideIcon,
  MessagesSquare,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";

/* ---------- data ---------- */

interface NavItem {
  label: string;
  Icon: LucideIcon;
  active?: boolean;
}

const nav: NavItem[] = [
  { label: "Dashboard", Icon: LayoutDashboard, active: true },
  { label: "Repositories", Icon: FolderGit2 },
  { label: "Pull Requests", Icon: GitPullRequest },
  { label: "Code Reviews", Icon: Code2 },
  { label: "AI Chat", Icon: MessagesSquare },
  { label: "Security", Icon: ShieldCheck },
  { label: "Analytics", Icon: BarChart3 },
  { label: "Settings", Icon: Settings },
];

const tabs = [
  { label: "Review", count: 8, active: true },
  { label: "Files", count: 6 },
  { label: "Commits", count: 3 },
  { label: "Checks", count: 2 },
];

const files = [
  { name: "src/api/auth/login.ts", add: 45, del: 12, active: true },
  { name: "src/middleware/auth.ts", add: 32, del: 4 },
  { name: "src/lib/jwt.ts", add: 28, del: 0 },
  { name: "src/types/user.ts", add: 12, del: 2 },
  { name: "src/utils/validate.ts", add: 8, del: 0 },
  { name: "package.json", add: 2, del: 0 },
];

type DiffKind = "ctx" | "del" | "add";
interface DiffLine {
  n: number;
  kind: DiffKind;
  code: string;
}

const diff: DiffLine[] = [
  { n: 10, kind: "ctx", code: "export async function login(req: Request) {" },
  { n: 11, kind: "ctx", code: "  const { email, password } = req.json();" },
  { n: 12, kind: "ctx", code: "" },
  { n: 13, kind: "del", code: "  const user = await db.user.findUnique({" },
  { n: 14, kind: "del", code: "    where: { email }," },
  { n: 15, kind: "del", code: "  });" },
  { n: 16, kind: "del", code: "  if (!user) {" },
  { n: 17, kind: "del", code: '    throw new Error("Invalid credentials");' },
  { n: 18, kind: "add", code: "  const user = await db.user.findUnique({" },
  { n: 19, kind: "add", code: "    where: { email }," },
  { n: 20, kind: "add", code: "    select: { id: true, password: true }," },
  { n: 21, kind: "add", code: "  });" },
  { n: 22, kind: "add", code: "  if (!user) {" },
  { n: 23, kind: "add", code: "    return NextResponse.json(" },
  { n: 24, kind: "add", code: '      { error: "Invalid credentials" },' },
  { n: 25, kind: "add", code: "      { status: 401 }" },
  { n: 26, kind: "add", code: "    );" },
  { n: 27, kind: "add", code: "  }" },
];

const diffStyles: Record<DiffKind, { row: string; mark: string }> = {
  ctx: { row: "text-zinc-400", mark: " " },
  del: { row: "bg-red-500/15 text-red-200", mark: "-" },
  add: { row: "bg-emerald-500/15 text-emerald-200", mark: "+" },
};

interface Finding {
  title: string;
  desc: string;
  level: string;
  Icon: LucideIcon;
  icon: string;
  badge: string;
}

const findings: Finding[] = [
  {
    title: "Potential user enumeration",
    desc: "This endpoint returns different error messages for non-existent users and invalid credentials.",
    level: "High",
    Icon: AlertCircle,
    icon: "bg-red-500/15 text-red-400",
    badge: "bg-red-500/15 text-red-300 border-red-400/30",
  },
  {
    title: "Add rate limiting",
    desc: "Consider adding rate limiting to prevent brute force attacks.",
    level: "Medium",
    Icon: AlertTriangle,
    icon: "bg-amber-500/15 text-amber-400",
    badge: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  },
  {
    title: "Use secure password comparison",
    desc: "Use a constant-time comparison method to prevent timing attacks.",
    level: "Low",
    Icon: ShieldCheck,
    icon: "bg-emerald-500/15 text-emerald-400",
    badge: "bg-white/5 text-zinc-300 border-white/15",
  },
];

/* ---------- component ---------- */

function ProductshowCase() {
  return (
    <section
      id="showcase"
      className="relative isolate overflow-hidden bg-black px-4 py-16 md:px-8 md:py-24 lg:px-12"
    >
      {/* glow behind the mockup */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="mx-auto max-w-[1200px]">
        {/* Header (center aligned) */}
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5">
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-violet-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-violet-200">
              Product showcase
            </span>
          </div>

          <h2 className="text-[36px] font-black leading-[1.1] tracking-tight text-white md:text-[52px]">
            See DevPilot in action
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-400">
            A glimpse of the DevPilot dashboard. Connect your repositories,
            review pull requests, explore AI findings, and get actionable
            suggestions, all in one place.
          </p>
        </div>

        {/* App window */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-violet-400/30 bg-[#08071a]/90 shadow-[0_0_80px_-10px_rgba(139,92,246,0.45)] backdrop-blur">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          {/*logo  */}
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500">
                <Code2 className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <span className="text-sm font-bold text-white">DevPilot</span>
            </div>
               {/* searchbar */}
            <div className="hidden max-w-sm flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-500 sm:flex">
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              Search repositories, pull requests...
            </div>
            
            {/* profile */}
            <div className="flex items-center gap-3 text-zinc-400">
              <Bell className="h-4 w-4" aria-hidden="true" />
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet-400 to-sky-400" />
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <aside className="hidden w-52 shrink-0 flex-col justify-between border-r border-white/10 p-3 md:flex">
              <ul className="space-y-1">
                {nav.map(({ label, Icon, active }) => (
                  <li
                    key={label}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] ${
                      active
                        ? "bg-violet-500/15 font-semibold text-white"
                        : "text-zinc-400"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-500/20 text-xs font-bold text-sky-300">
                  D
                </div>
                <div className="text-xs">
                  <p className="text-[10px] text-zinc-500">Workspace</p>
                  <p className="font-semibold text-white">Personal</p>
                </div>
              </div>
            </aside>

            {/* Main */}
            <div className="min-w-0 flex-1 p-4 md:p-5">
              {/* breadcrumb */}
              <p className="flex items-center gap-1 text-xs text-zinc-500">
                Pull Requests <ChevronRight className="h-3 w-3" aria-hidden="true" /> #42
              </p>

              {/* PR header */}
              <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-white md:text-xl">
                      Add user authentication with JWT
                    </h3>
                    <span className="rounded-md border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                      Open
                    </span>
                  </div>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400">
                    <span>devpilot-api</span>
                    <span className="inline-flex items-center gap-1">
                      <GitBranch className="h-3 w-3" aria-hidden="true" /> feature/auth
                    </span>
                    <span className="text-emerald-400">+124</span>
                    <span className="text-red-400">-18</span>
                    <span>6 files changed</span>
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="rounded-lg border border-violet-400/40 bg-violet-400/10 px-3.5 py-2 text-xs font-semibold text-violet-200">
                    Re-run review
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg bg-violet-500 px-3.5 py-2 text-xs font-semibold text-white">
                    View on GitHub
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-5 flex gap-2 overflow-x-auto">
                {tabs.map(({ label, count, active }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                      active
                        ? "border-violet-400/50 bg-violet-500/15 text-white"
                        : "border-white/10 text-zinc-400"
                    }`}
                  >
                    {label}
                    <span className="rounded bg-white/10 px-1.5 text-[10px]">{count}</span>
                  </span>
                ))}
              </div>

              {/* 3 panels */}
              <div className="mt-4 grid gap-4 lg:grid-cols-[200px_minmax(0,1fr)_260px]">
                {/* Files */}
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <p className="mb-3 text-xs font-semibold text-white">Files changed (6)</p>
                  <ul className="space-y-1">
                    {files.map(({ name, add, del, active }) => (
                      <li
                        key={name}
                        className={`rounded-lg px-2.5 py-2 ${
                          active ? "border border-violet-400/40 bg-violet-500/10" : ""
                        }`}
                      >
                        <p className="flex items-center gap-1.5 truncate text-[11px] text-zinc-200">
                          <FileCode2 className="h-3 w-3 shrink-0 text-zinc-500" aria-hidden="true" />
                          <span className="truncate">{name}</span>
                        </p>
                        <p className="mt-0.5 pl-[18px] text-[10px]">
                          <span className="text-emerald-400">+{add}</span>{" "}
                          <span className="text-red-400">-{del}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diff */}
                <div className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                  <p className="border-b border-white/10 px-3 py-2 text-[11px] text-zinc-400">
                    src/api/auth/login.ts
                  </p>
                  <div className="overflow-x-auto py-2 font-mono text-[11px] leading-6">
                    {diff.map(({ n, kind, code }) => (
                      <div key={n} className={`flex whitespace-pre px-3 ${diffStyles[kind].row}`}>
                        <span className="w-8 shrink-0 select-none text-zinc-600">{n}</span>
                        <span className="w-4 shrink-0 select-none">{diffStyles[kind].mark}</span>
                        <span>{code}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Findings */}
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <p className="mb-3 text-xs font-semibold text-white">AI Findings (3)</p>
                  <ul className="space-y-3">
                    {findings.map(({ title, desc, level, Icon, icon, badge }) => (
                      <li key={title} className="flex gap-2.5">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${icon}`}
                        >
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-semibold text-white">{title}</p>
                            <span
                              className={`shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-semibold ${badge}`}
                            >
                              {level}
                            </span>
                          </div>
                          <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductshowCase;