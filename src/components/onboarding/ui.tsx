import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

/* ---------- Human logo ---------- */
export function HumanLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold tracking-tight ${className}`}
    >
      <span
        aria-hidden
        className="grid h-6 w-6 place-items-center rounded-md text-[13px] font-bold text-white"
        style={{ background: "linear-gradient(135deg,#D4A017,#B8860B)" }}
      >
        H
      </span>
      <span>Human</span>
    </span>
  );
}

/* ---------- Eyebrow label ---------- */
export function Eyebrow({
  index,
  duration,
  children,
}: {
  index?: string;
  duration?: string;
  children?: ReactNode;
}) {
  return (
    <div className="eyebrow flex items-center gap-3">
      {index && <span className="text-ink-soft">{index}</span>}
      {index && children && (
        <span aria-hidden className="h-px w-6 bg-hairline" />
      )}
      {children && <span className="text-ink-soft">{children}</span>}
      {duration && (
        <>
          <span aria-hidden className="h-px w-6 bg-hairline" />
          <span className="text-ink-soft">{duration}</span>
        </>
      )}
    </div>
  );
}

/* ---------- Buttons ---------- */
type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function ButtonPrimary({ children, className = "", ...props }: BtnProps) {
  return (
    <button
      {...props}
      className={`group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-[15px] font-semibold text-white shadow-raised transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

export function ButtonSecondary({ children, className = "", ...props }: BtnProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-raised px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-surface-raised hover:border-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo ${className}`}
    >
      {children}
    </button>
  );
}

/* ---------- Section wrapper ---------- */
export function Section({
  id,
  dark = false,
  num,
  children,
  className = "",
}: {
  id: string;
  dark?: boolean;
  num?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-section relative w-full overflow-hidden py-28 sm:py-40 ${
        dark ? "text-white" : "text-ink"
      } ${className}`}
      style={dark ? { background: "var(--gradient-dark)" } : undefined}
    >
      {num && (
        <div
          aria-hidden
          data-parallax="-0.35"
          data-parallax-rotate="-6"
          className="pointer-events-none absolute -right-4 top-8 select-none font-black leading-none tracking-tighter sm:-right-6 sm:top-12"
          style={{
            fontSize: "clamp(180px, 26vw, 380px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          }}
        >
          {num}
        </div>
      )}
      {num && (
        <div
          aria-hidden
          data-parallax="0.18"
          data-parallax-x="-0.05"
          className="pointer-events-none absolute -left-16 bottom-10 hidden select-none font-mono text-[11px] uppercase tracking-[0.4em] text-white/25 lg:block"
        >
          / section — {num}
        </div>
      )}
      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10" data-reveal>
        {children}
      </div>
    </section>
  );
}

/* ---------- Key takeaway ---------- */
export function KeyTakeaway({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <aside
      className={`mt-10 rounded-2xl border p-6 sm:p-7 ${
        dark
          ? "border-white/10 bg-surface-raised/5 backdrop-blur"
          : "border-hairline bg-surface-raised shadow-soft"
      }`}
    >
      <div
        className={`eyebrow mb-4 ${dark ? "text-white/70" : ""}`}
      >
        À retenir
      </div>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
              style={{ backgroundColor: "var(--success)" }}
            >
              <Check className="h-3 w-3 text-white" />
            </span>
            <span
              className={`text-[15px] leading-relaxed ${
                dark ? "text-white/85" : "text-ink"
              }`}
            >
              {it}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ---------- Human callout ---------- */
export function HumanCallout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="mt-8 rounded-r-2xl rounded-l-md border-l-4 p-5 backdrop-blur sm:p-6"
      style={{
        borderColor: "var(--human-border)",
        backgroundColor: "var(--human-bg)",
      }}
    >
      <div className="mb-3 flex items-center gap-2">
        <HumanLogo className="text-[13px] text-white" />
        <span className="eyebrow text-white/60">Chez Human</span>
      </div>
      {title && (
        <h4 className="mb-2 text-lg font-semibold text-white">{title}</h4>
      )}
      <div className="text-[15px] leading-relaxed text-white/85">{children}</div>
    </div>
  );
}

/* ---------- Code block ---------- */
export function CodeBlock({
  language = "cs",
  filename,
  children,
}: {
  language?: string;
  filename?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-xl shadow-raised"
      style={{ backgroundColor: "var(--code-bg)" }}
    >
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-surface-raised/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-surface-raised/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-surface-raised/15" />
        </div>
        {filename && (
          <span className="font-mono text-[11px] text-white/50">{filename}</span>
        )}
        <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed text-white/90">
        {children}
      </pre>
    </div>
  );
}

/* ---------- Chip ---------- */
export function Chip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
        active
          ? "border-transparent bg-gradient-brand text-white shadow-soft"
          : "border-hairline bg-white/[0.04] text-ink hover:border-white/30"
      }`}
    >
      {children}
    </button>
  );
}

/* ---------- Section title ---------- */
export function SectionTitle({
  children,
  dark,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      className={`mt-4 text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[52px] ${
        dark ? "text-white" : "text-ink"
      }`}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  children,
  dark,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`mt-5 max-w-2xl text-[18px] leading-relaxed ${
        dark ? "text-white/70" : "text-ink-soft"
      }`}
    >
      {children}
    </p>
  );
}

export function Badge({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "success" | "warning" | "danger" | "brand";
  children: ReactNode;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-white/5 text-ink border-white/10",
    success: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    danger:  "bg-red-500/10  text-red-300  border-red-500/30",
    brand:   "bg-indigo-500/15 text-indigo-200 border-indigo-500/30",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export { Sparkles };