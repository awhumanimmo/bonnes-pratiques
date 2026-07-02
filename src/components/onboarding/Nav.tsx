import { useEffect, useState } from "react";
import { Menu, X, Check } from "lucide-react";
import { HumanLogo } from "./ui";

export const SECTIONS = [
  { id: "hero", label: "Introduction", num: "00" },
  { id: "s1", label: "Le piège du chat web", num: "01", duration: "~5 min" },
  { id: "s2", label: "Tokens & contexte", num: "02", duration: "~5 min" },
  { id: "s3", label: "Rules", num: "03", duration: "~5 min" },
  { id: "s4", label: "Skills", num: "04", duration: "~5 min" },
  { id: "s5", label: "Plugins", num: "05", duration: "~5 min" },
  { id: "s6", label: "MCP", num: "06", duration: "~7 min" },
  { id: "s7", label: "Agents", num: "07", duration: "~8 min" },
  { id: "s8", label: "Anti-patterns", num: "08", duration: "~5 min" },
  { id: "s9", label: "Quiz", num: "09", duration: "~5 min" },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(100, (scrolled / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function useActiveSection() {
  const [active, setActive] = useState<string>("hero");
  const [seen, setSeen] = useState<Set<string>>(new Set(["hero"]));
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
            setSeen((prev) => new Set(prev).add(e.target.id));
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return { active, seen };
}

export function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
  const progress = useScrollProgress();
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b border-white/5"
      style={{
        background: "rgba(6, 6, 12, 0.55)",
        backdropFilter: "saturate(180%) blur(14px)",
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center gap-4 px-6 lg:px-10">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden
            className="h-7 w-7 rounded-lg shadow-lg shadow-indigo-500/30"
            style={{ background: "linear-gradient(135deg,#7C3AED,#22D3EE)" }}
          />
          <span className="font-bold tracking-tight uppercase text-sm text-white">
            Cursor<span className="text-indigo-400">.</span>NET
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-white/10 sm:block" />
          <span className="hidden truncate text-sm font-medium text-ink-soft sm:block">
            Onboarding IA · Human
          </span>
        </a>
        <div className="ml-auto flex items-center gap-4">
          <span className="hidden font-mono text-[11px] tabular-nums text-ink-soft sm:inline">
            {String(Math.round(progress)).padStart(3, "0")} / 100
          </span>
          <button
            aria-label="Ouvrir le sommaire"
            onClick={onOpenMenu}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-ink transition-colors hover:border-white/30 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        aria-hidden
        className="h-[2px] w-full bg-white/5"
      >
        <div
          className="h-full transition-[width] duration-150"
          style={{ width: `${progress}%`, background: "linear-gradient(90deg,#7C3AED,#22D3EE,#EC4899)" }}
        />
      </div>
    </header>
  );
}

export function Sidebar() {
  const { active, seen } = useActiveSection();
  return (
    <nav
      aria-label="Sommaire"
      className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ol className="space-y-2">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          const isSeen = seen.has(s.id) && !isActive;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center gap-3 py-1 text-[11px] font-mono uppercase tracking-widest text-ink-soft transition-colors hover:text-ink"
              >
                <span
                  aria-hidden
                  className={`block h-px transition-all ${
                    isActive ? "w-10 bg-gradient-brand" :
                    isSeen   ? "w-6 bg-emerald-400/70" :
                               "w-4 bg-white/20"
                  }`}
                />
                <span
                  className={`transition-opacity ${
                    isActive ? "text-white" :
                    isSeen   ? "text-emerald-300/70" :
                    "opacity-50 group-hover:opacity-100"
                  }`}
                >
                  {s.num}
                </span>
                {isActive && (
                  <span className="max-w-[160px] truncate text-white/80 normal-case tracking-normal">
                    {s.label}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { active, seen } = useActiveSection();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <aside className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-surface p-6">
        <div className="mb-6 flex items-center justify-between">
          <HumanLogo />
          <button
            aria-label="Fermer le sommaire"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface-raised"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="eyebrow mb-3">Sommaire</div>
        <ol className="space-y-1">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            const isSeen = seen.has(s.id) && !isActive;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={onClose}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-surface-raised shadow-soft text-ink"
                      : "text-ink-soft hover:bg-surface-raised/60"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[11px] font-semibold ${
                      isActive
                        ? "border-transparent bg-gradient-brand text-white"
                        : isSeen
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-hairline bg-surface-raised"
                    }`}
                  >
                    {isSeen ? <Check className="h-3.5 w-3.5" /> : s.num}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{s.label}</span>
                  {s.duration && (
                    <span className="text-[11px] text-ink-soft">
                      {s.duration}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ol>
      </aside>
    </div>
  );
}