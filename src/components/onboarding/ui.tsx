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
        className="grid h-6 w-6 place-items-center text-[13px] font-black text-white"
        style={{
          background: "var(--ink)",
          border: "1.5px solid var(--ink)",
          borderRadius: "2px",
        }}
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
      className={`group inline-flex items-center gap-2 rounded-sm px-6 py-3 text-[15px] font-semibold text-white shadow-raised transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      style={{ background: "var(--indigo)", border: "1.5px solid var(--ink)" }}
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
      className={`inline-flex items-center gap-2 rounded-sm bg-surface-raised px-5 py-3 text-[15px] font-medium text-ink transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo ${className}`}
      style={{ border: "1.5px solid var(--ink)", boxShadow: "3px 3px 0 0 var(--ink)" }}
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
          className="pointer-events-none absolute -right-4 top-8 select-none font-black italic leading-none tracking-tighter sm:-right-6 sm:top-12"
          style={{
            fontSize: "clamp(200px, 30vw, 460px)",
            fontFamily: "var(--font-display)",
            color: "transparent",
            WebkitTextStroke: dark
              ? "1.5px oklch(0.98 0.01 80 / 0.14)"
              : "1.5px oklch(0.62 0.16 40 / 0.35)",
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
          className={`pointer-events-none absolute -left-16 bottom-10 hidden select-none font-mono text-[11px] uppercase tracking-[0.4em] lg:block ${
            dark ? "text-white/30" : "text-ink-soft/70"
          }`}
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
      className={`mt-10 rounded-sm p-6 sm:p-7 ${
        dark
          ? "border border-white/15 bg-white/[0.04] backdrop-blur"
          : "bg-surface-raised"
      }`}
      style={
        dark
          ? undefined
          : { border: "1.5px solid var(--ink)", boxShadow: "5px 5px 0 0 var(--ink)" }
      }
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
              className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-sm"
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
      className="mt-8 rounded-sm p-5 sm:p-6"
      style={{
        border: "1.5px solid var(--ink)",
        borderLeft: "6px solid var(--ink)",
        backgroundColor: "var(--human-bg)",
        boxShadow: "4px 4px 0 0 var(--ink)",
      }}
    >
      <div className="mb-3 flex items-center gap-2">
        <HumanLogo className="text-[13px] text-ink" />
        <span className="eyebrow text-ink-soft">Chez Human</span>
      </div>
      {title && (
        <h4 className="mb-2 text-lg font-bold text-ink">{title}</h4>
      )}
      <div className="text-[15px] leading-relaxed text-ink">{children}</div>
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
      className="overflow-hidden rounded-sm"
      style={{
        backgroundColor: "var(--code-bg)",
        border: "1.5px solid var(--ink)",
        boxShadow: "5px 5px 0 0 var(--indigo)",
      }}
    >
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{background:"#e8a87c"}} />
          <span className="h-2.5 w-2.5 rounded-full" style={{background:"#87a878"}} />
          <span className="h-2.5 w-2.5 rounded-full" style={{background:"#c4654a"}} />
        </div>
        {filename && (
          <span className="font-mono text-[11px] text-white/60">{filename}</span>
        )}
        <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
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
      className={`rounded-sm px-3.5 py-1.5 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
        active
          ? "text-white"
          : "bg-surface-raised text-ink"
      }`}
      style={{
        border: "1.5px solid var(--ink)",
        background: active ? "var(--indigo)" : undefined,
        boxShadow: active ? "2px 2px 0 0 var(--ink)" : "2px 2px 0 0 transparent",
      }}
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
      className={`mt-4 font-display text-[44px] font-black leading-[1.02] tracking-tight sm:text-[64px] ${
        dark ? "text-white" : "text-ink"
      }`}
      style={{ fontFamily: "var(--font-display)" }}
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
    neutral: "bg-surface-raised text-ink",
    success: "text-white",
    warning: "text-ink",
    danger:  "text-white",
    brand:   "text-white",
  };
  const bg: Record<string, string> = {
    neutral: "transparent",
    success: "oklch(0.55 0.13 145)",
    warning: "oklch(0.78 0.13 70)",
    danger:  "oklch(0.55 0.19 28)",
    brand:   "oklch(0.62 0.16 40)",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${tones[tone]}`}
      style={{ border: "1.5px solid var(--ink)", background: bg[tone] }}
    >
      {children}
    </span>
  );
}

export { Sparkles };