import { useState, Fragment, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  AlertTriangle,
  MessageSquare,
  Terminal,
  ChevronDown,
  Database,
  FileText,
  Server,
  GitPullRequest,
  Sparkles,
  Cpu,
  Layers,
  Award,
  RotateCcw,
  Zap,
} from "lucide-react";
import {
  Section,
  SectionTitle,
  SectionLead,
  Eyebrow,
  KeyTakeaway,
  HumanCallout,
  CodeBlock,
  Chip,
  ButtonPrimary,
  ButtonSecondary,
  Badge,
  HumanLogo,
} from "./ui";
import { SECTIONS } from "./Nav";

function PrevNext({ current }: { current: number }) {
  const prev = SECTIONS[current - 1];
  const next = SECTIONS[current + 1];
  return (
    <div className="mt-16 flex items-center justify-between gap-4 border-t border-hairline pt-6 text-sm">
      {prev ? (
        <a
          href={`#${prev.id}`}
          className="group inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>
            <span className="block text-[11px] uppercase tracking-wider">
              Précédent
            </span>
            <span className="font-medium text-ink">{prev.label}</span>
          </span>
        </a>
      ) : (
        <span />
      )}
      {next && (
        <a
          href={`#${next.id}`}
          className="group ml-auto inline-flex items-center gap-2 text-right text-ink-soft transition-colors hover:text-ink"
        >
          <span>
            <span className="block text-[11px] uppercase tracking-wider">
              Suivant
            </span>
            <span className="font-medium text-ink">{next.label}</span>
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}

/* ==============================================================
 * HERO
 * ============================================================ */
export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Ambient layers */}
      <div
        aria-hidden
        data-parallax="0.15"
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise opacity-30 mix-blend-multiply" />
      <div
        aria-hidden
        data-parallax="0.45"
        data-parallax-scale="0.15"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-[130px] animate-blob"
        style={{ background: "radial-gradient(circle, rgba(196,101,74,0.30), transparent 60%)" }}
      />
      <div
        aria-hidden
        data-parallax="-0.35"
        data-parallax-x="0.05"
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full blur-[110px] animate-blob"
        style={{ background: "radial-gradient(circle, rgba(135,168,120,0.28), transparent 60%)", animationDelay: "-6s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />

      {/* Floating code panels — parallax feel */}
      <div
        aria-hidden
        data-parallax="0.55"
        data-parallax-rotate="-4"
        className="pointer-events-none absolute left-4 top-24 hidden max-w-[280px] opacity-70 lg:block xl:left-16"
      >
        <div style={{ transform: "rotate(-8deg)" }}>
          <ChatWebMock />
        </div>
      </div>
      <div
        aria-hidden
        data-parallax="0.7"
        data-parallax-rotate="3"
        className="pointer-events-none absolute right-4 bottom-24 hidden max-w-[360px] opacity-80 lg:block xl:right-16"
      >
        <div style={{ transform: "rotate(6deg)" }}>
          <IDEMock />
        </div>
      </div>

      {/* Broken-grid stickers */}
      <div
        aria-hidden
        data-parallax="0.3"
        className="pointer-events-none absolute left-[12%] top-[22%] hidden select-none lg:block"
      >
        <span
          className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white"
          style={{
            background: "var(--indigo)",
            border: "1.5px solid var(--ink)",
            boxShadow: "3px 3px 0 0 var(--ink)",
            transform: "rotate(-8deg)",
          }}
        >
          Édition N°01
        </span>
      </div>
      <div
        aria-hidden
        data-parallax="-0.25"
        className="pointer-events-none absolute right-[10%] top-[18%] hidden select-none lg:block"
      >
        <span
          className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-ink"
          style={{
            background: "var(--cyan)",
            border: "1.5px solid var(--ink)",
            boxShadow: "3px 3px 0 0 var(--ink)",
            transform: "rotate(6deg)",
          }}
        >
          Manuel · 45 min
        </span>
      </div>

      <div
        className="relative z-10 max-w-5xl text-center animate-fade-up"
        data-parallax="-0.08"
      >
        <span
          className="inline-flex items-center gap-2 rounded-sm px-4 py-1.5"
          style={{
            background: "var(--surface-raised)",
            border: "1.5px solid var(--ink)",
            boxShadow: "3px 3px 0 0 var(--ink)",
          }}
        >
          <span
            className="h-2 w-2 rounded-full animate-pulse"
            style={{ background: "var(--indigo)" }}
          />
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-ink">
            Onboarding · 45 min · .NET / C#
          </span>
        </span>

        <h1
          className="mt-8 leading-[0.92] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-[56px] font-black text-ink sm:text-[92px] lg:text-[132px]">
            De l'IA web
          </span>
          <span
            className="block text-[56px] font-black italic sm:text-[92px] lg:text-[132px]"
            style={{ color: "var(--indigo)" }}
          >
            à l'agent de code.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink sm:text-xl">
          Vous utilisez déjà l'IA. Probablement au{" "}
          <span
            className="font-semibold italic"
            style={{
              color: "var(--indigo)",
              backgroundImage:
                "linear-gradient(transparent 60%, oklch(0.78 0.09 60 / 0.5) 60%)",
            }}
          >
            mauvais endroit
          </span>
          . Neuf sections, un quiz, zéro connexion — pour passer du chat éphémère
          à l'agent qui connaît votre repo.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#s1">
            <ButtonPrimary>Commencer le parcours</ButtonPrimary>
          </a>
          <ButtonSecondary onClick={() => document.getElementById("s9")?.scrollIntoView()}>
            Aller au quiz
          </ButtonSecondary>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
          {["dotnet", "c#", "html", "css", "codex", "MCP"].map((t) => (
            <span
              key={t}
              className="rounded-sm px-3 py-1 text-ink"
              style={{ border: "1.5px solid var(--ink)", background: "var(--surface-raised)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft">
          scroll
        </span>
        <div
          className="h-16 w-[2px]"
          style={{ background: "linear-gradient(to bottom, var(--ink), transparent)" }}
        />
      </div>
    </section>
  );
}

function ChatWebMock() {
  return (
    <div
      className="rounded-sm bg-surface-raised p-5"
      style={{ border: "1.5px solid var(--ink)", boxShadow: "5px 5px 0 0 var(--ink)" }}
    >
      <div className="mb-4 flex items-center gap-2 text-xs text-ink-soft">
        <MessageSquare className="h-3.5 w-3.5" />
        <span className="font-mono">chat.web / session éphémère</span>
      </div>
      <div className="space-y-3">
        <div
          className="max-w-[85%] rounded-sm px-4 py-2.5 text-sm text-ink"
          style={{ background: "oklch(0.22 0.03 40 / 0.07)", border: "1px solid var(--ink)" }}
        >
          Écris-moi une méthode C# pour récupérer un user.
        </div>
        <div
          className="ml-auto max-w-[85%] rounded-sm px-4 py-2.5 text-sm text-white"
          style={{ background: "var(--indigo)", border: "1px solid var(--ink)" }}
        >
          public User GetUser(int id) &#123; ... &#125;
        </div>
        <div
          className="rounded-sm px-3 py-2 text-[12px] text-ink"
          style={{ background: "oklch(0.78 0.13 70 / 0.35)", border: "1px solid var(--ink)" }}
        >
          Hors conventions équipe. Aucun accès au code réel.
        </div>
      </div>
    </div>
  );
}

function IDEMock() {
  return (
    <div
      className="overflow-hidden rounded-sm"
      style={{
        background: "var(--code-bg)",
        border: "1.5px solid var(--ink)",
        boxShadow: "5px 5px 0 0 var(--indigo)",
      }}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{background:"#e8a87c"}} />
          <span className="h-2.5 w-2.5 rounded-full" style={{background:"#87a878"}} />
          <span className="h-2.5 w-2.5 rounded-full" style={{background:"#c4654a"}} />
        </div>
        <span className="ml-2 font-mono text-[11px] text-white/60">
          UserService.cs · agent
        </span>
      </div>
      <div className="grid grid-cols-[1fr_180px]">
        <pre className="border-r border-white/5 px-4 py-4 font-mono text-[12px] leading-relaxed text-white/85">
{`public async Task<Result<User>>
  GetUserAsync(int id, CT ct)
{
    var user = await _db.Users
        .FindAsync(id, ct);
    return user is null
        ? Result.NotFound("Utilisateur")
        : Result.Ok(user);
}`}
        </pre>
        <div className="space-y-2 p-3" style={{background:"oklch(1 0 0 / 0.03)"}}>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/70">
            <Sparkles className="h-3 w-3" style={{color: "#e8a87c"}} />
            Agent IA
          </div>
          <div className="rounded-sm p-2 text-[11px] text-white/70" style={{background:"oklch(1 0 0 / 0.06)"}}>
            @UserService.cs
          </div>
          <div className="rounded-sm p-2 text-[11px] text-white" style={{background:"oklch(0.55 0.13 145 / 0.6)"}}>
            ✓ Result&lt;T&gt;
          </div>
          <div className="rounded-sm p-2 text-[11px] text-white" style={{background:"oklch(0.55 0.13 145 / 0.6)"}}>
            ✓ async / CT
          </div>
          <div className="rounded-sm p-2 text-[11px] text-white" style={{background:"oklch(0.55 0.13 145 / 0.6)"}}>
            ✓ FR
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==============================================================
 * SECTION 1 — Chat web vs Agent IDE
 * ============================================================ */
export function Section1() {
  const [after, setAfter] = useState(false);
  const rows = [
    { label: "Contexte", web: "Aucun code réel", ide: "Fichiers, repo, @dossier" },
    { label: "Mémoire", web: "Session éphémère", ide: "Rules persistantes" },
    { label: "Actions", web: "Texte uniquement", ide: "Éditer, exécuter, diff" },
    { label: "Qualité code", web: "Générique", ide: "Conventions équipe" },
  ];
  return (
    <Section id="s1" num="01">
      <Eyebrow index="Section 01" duration="~5 min">
        Chapitre 01
      </Eyebrow>
      <SectionTitle>Le piège du chat web.</SectionTitle>
      <SectionLead>
        Vous générez déjà du code avec Gemini ou ChatGPT. Le problème n'est pas le
        modèle — c'est l'endroit. Un onglet de navigateur ne verra jamais votre
        repo.
      </SectionLead>

      <div className="mt-14 overflow-hidden rounded-2xl border border-hairline bg-surface-raised shadow-soft">
        <div className="grid grid-cols-3 border-b border-hairline bg-ink/[0.02] px-6 py-4 text-[13px] font-semibold uppercase tracking-wider text-ink-soft">
          <span />
          <span className="flex items-center gap-2">
            <MessageSquare className="h-3.5 w-3.5" /> Chat web
          </span>
          <span className="flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5" /> Agent IDE
          </span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={`grid grid-cols-3 items-center gap-4 px-6 py-5 text-[15px] ${
              i < rows.length - 1 ? "border-b border-hairline" : ""
            }`}
          >
            <span className="font-semibold text-ink">{r.label}</span>
            <span className="text-ink-soft">{r.web}</span>
            <span className="font-medium text-ink">{r.ide}</span>
          </div>
        ))}
      </div>

      {/* Toggle comparateur */}
      <div className="mt-14 rounded-2xl border border-hairline bg-surface-raised p-6 shadow-soft sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="eyebrow mb-1">Même prompt</div>
            <h3 className="text-xl font-semibold text-ink">
              "Récupère un utilisateur par ID"
            </h3>
          </div>
          <div className="inline-flex rounded-full border border-hairline bg-ink/[0.03] p-1 text-sm font-medium">
            <button
              onClick={() => setAfter(false)}
              className={`rounded-full px-4 py-1.5 transition-all ${
                !after ? "bg-surface-raised shadow-soft text-ink" : "text-ink-soft"
              }`}
            >
              Avant · chat web
            </button>
            <button
              onClick={() => setAfter(true)}
              className={`rounded-full px-4 py-1.5 transition-all ${
                after ? "bg-gradient-brand text-white shadow-soft" : "text-ink-soft"
              }`}
            >
              Après · agent
            </button>
          </div>
        </div>
        {!after ? (
          <CodeBlock filename="chat-web.cs" language="c#">
{`public User GetUser(int id)
{
    var user = db.Users.FirstOrDefault(u => u.Id == id);
    if (user == null) throw new Exception("Not found");
    return user;
}`}
          </CodeBlock>
        ) : (
          <CodeBlock filename="UserService.cs" language="c#">
{`public async Task<Result<User>> GetUserAsync(
    int id, CancellationToken ct)
{
    var user = await _db.Users
        .AsNoTracking()
        .FirstOrDefaultAsync(u => u.Id == id, ct);

    return user is null
        ? Result.NotFound("Utilisateur introuvable")
        : Result.Ok(user);
}`}
          </CodeBlock>
        )}
      </div>

      <KeyTakeaway
        items={[
          "Le chat web ne voit rien de votre repo — chaque prompt repart de zéro.",
          "L'agent IDE lit vos fichiers, respecte vos conventions et édite pour vous.",
          "Même modèle sous le capot : la différence, c'est le contexte.",
        ]}
      />
      <PrevNext current={1} />
    </Section>
  );
}

/* ==============================================================
 * SECTION 2 — Tokens & contexte
 * ============================================================ */
export function Section2() {
  const items = [
    { key: "file", label: "@fichier", cost: 15 },
    { key: "folder", label: "@dossier", cost: 60 },
    { key: "hist", label: "historique chat", cost: 40 },
  ];
  const [active, setActive] = useState<Record<string, boolean>>({});
  const total = items.reduce(
    (s, i) => s + (active[i.key] ? i.cost : 0),
    0,
  );
  const capped = Math.min(100, total);
  return (
    <Section id="s2" num="02">
      <Eyebrow index="Section 02" duration="~5 min">
        Contexte
      </Eyebrow>
      <SectionTitle>Tokens & auditorium.</SectionTitle>
      <SectionLead>
        L'agent a une jauge de contexte finie. Chaque fichier attaché, chaque
        message d'historique, chaque outil branché consomme une place dans
        l'auditorium.
      </SectionLead>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
        {/* Auditorium metaphor */}
        <div className="rounded-2xl border border-hairline bg-surface-raised p-6 shadow-soft">
          <div className="eyebrow mb-4">Analogie</div>
          <div className="grid grid-cols-10 gap-1.5">
            {Array.from({ length: 60 }).map((_, i) => {
              const filled = i < Math.round((capped / 100) * 60);
              return (
                <div
                  key={i}
                  className={`aspect-square rounded ${
                    filled ? "bg-gradient-brand" : "bg-ink/5"
                  }`}
                />
              );
            })}
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            Chaque siège = un morceau de contexte. Plus vous invitez, moins il reste
            de place pour le raisonnement.
          </p>
        </div>
        {/* Budget gauge */}
        <div className="rounded-2xl border border-hairline bg-surface-raised p-6 shadow-soft">
          <div className="mb-4 flex items-baseline justify-between">
            <div className="eyebrow">Budget contexte</div>
            <div className="text-3xl font-bold tabular-nums">
              {capped}
              <span className="text-lg text-ink-soft">%</span>
            </div>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-ink/5">
            <div
              className="h-full bg-gradient-brand transition-all duration-500"
              style={{ width: `${capped}%` }}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {items.map((it) => (
              <Chip
                key={it.key}
                active={active[it.key]}
                onClick={() =>
                  setActive((p) => ({ ...p, [it.key]: !p[it.key] }))
                }
              >
                <span className="font-mono">{it.label}</span>
                <span className="ml-1.5 opacity-70">+{it.cost}%</span>
              </Chip>
            ))}
          </div>
          {total > 100 && (
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-[13px] text-red-300">
              <AlertTriangle className="h-4 w-4" />
              Contexte saturé — l'agent oublie le début.
            </div>
          )}
        </div>
      </div>

      <KeyTakeaway
        items={[
          "Un contexte plein n'est pas un contexte utile — c'est un contexte bruyant.",
          "Attacher le fichier précis, pas le dossier entier.",
          "Vider l'historique quand on change de sujet.",
        ]}
      />
      <PrevNext current={2} />
    </Section>
  );
}

/* ==============================================================
 * SECTION 3 — Rules
 * ============================================================ */
export function Section3() {
  return (
    <Section id="s3" num="03">
      <Eyebrow index="Section 03" duration="~5 min">
        Rules
      </Eyebrow>
      <SectionTitle>Les conventions, écrites une fois.</SectionTitle>
      <SectionLead>
        Les rules sont un fichier markdown dans <code className="font-mono text-[14px]">.codex/rules</code>{" "}
        que l'agent lit à chaque prompt. Les conventions cessent d'être orales.
      </SectionLead>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Badge tone="danger">Avant</Badge>
            <span className="text-sm text-ink-soft">Aucune rule</span>
          </div>
          <CodeBlock filename="Handler.cs" language="c#">
{`public User Handle(Request req)
{
    if (req == null) throw new
        ArgumentNullException();
    return _svc.Get(req.Id);
}
// English, sync, exceptions`}
          </CodeBlock>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Badge tone="success">Après</Badge>
            <span className="text-sm text-ink-soft">Avec .codex/rules</span>
          </div>
          <CodeBlock filename="Handler.cs" language="c#">
{`public async Task<Result<User>>
  HandleAsync(Request req, CT ct)
{
    if (req is null)
        return Result.Invalid("Requête vide");
    return await _svc.GetAsync(req.Id, ct);
}
// FR, async, Result<T>`}
          </CodeBlock>
        </div>
      </div>

      <div className="mt-8">
        <CodeBlock filename=".codex/rules/csharp.md" language="md">
{`# Conventions C# — Équipe Human

- Toujours retourner Result<T>, jamais lever d'exception métier.
- Toutes les méthodes I/O sont async et acceptent un CancellationToken.
- Messages d'erreur en français, orientés utilisateur.
- Respecter EditorConfig (indent 4, LF).
- Interdit : var pour les types primitifs, throw new Exception(…).`}
        </CodeBlock>
      </div>

      <HumanCallout title="Nos rules par défaut">
        Result&lt;T&gt; systématique · messages d'erreur en français · async/CT
        obligatoires · EditorConfig équipe · pattern Repository côté data.
        Cloné automatiquement dans chaque nouveau repo.
      </HumanCallout>

      <KeyTakeaway
        items={[
          "Une rule = une convention orale enfin écrite.",
          "Versionnée avec le repo, elle survit aux changements d'équipe.",
          "Commencez petit : 5 règles utiles > 40 règles ignorées.",
        ]}
      />
      <PrevNext current={3} />
    </Section>
  );
}

/* ==============================================================
 * SECTION 4 — Skills
 * ============================================================ */
function SkillCard({
  name,
  tag,
  desc,
  children,
}: {
  name: string;
  tag: string;
  desc: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-surface-raised shadow-soft transition-all hover:shadow-raised">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
      >
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span className="eyebrow">{tag}</span>
          </div>
          <h4 className="text-lg font-semibold text-ink">{name}</h4>
          <p className="mt-1 text-sm text-ink-soft">{desc}</p>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink-soft transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-hairline bg-ink/[0.02] p-6 text-sm leading-relaxed text-ink/85">
          {children}
        </div>
      )}
    </div>
  );
}

export function Section4() {
  return (
    <Section id="s4" num="04">
      <Eyebrow index="Section 04" duration="~5 min">
        Skills
      </Eyebrow>
      <SectionTitle>Des expertises réutilisables.</SectionTitle>
      <SectionLead>
        Un skill est une compétence packagée : un prompt + des outils + un mode
        opératoire. L'agent l'active quand il en a besoin.
      </SectionLead>

      <div className="mt-12 grid gap-4">
        <SkillCard
          name="systematic-debugging"
          tag="Skill · debug"
          desc="Reproduit le bug, isole, trace, propose un correctif minimal."
        >
          Isole la variable en cause, ajoute des logs ciblés, propose un test de
          régression, puis le fix. Ne modifie jamais plus de trois fichiers sans
          demander.
        </SkillCard>
        <SkillCard
          name="review-guidelines"
          tag="Skill · review"
          desc="Passe une PR au crible des guidelines équipe avant merge."
        >
          Charge les ~40 agents guideline-*, dispatche par domaine (data, API,
          UI), rend un rapport structuré avec badges Blocking / Warning /
          Suggestion.
        </SkillCard>
        <SkillCard
          name="brainstorming"
          tag="Skill · design"
          desc="Explore N options avant de coder, arbitre par contrainte."
        >
          Formule 3 à 5 approches, chacune avec trade-offs explicites. Attend
          le feu vert avant d'écrire une ligne.
        </SkillCard>
      </div>

      <HumanCallout title="Nos skills clés">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { n: "1", t: "build-guideline-agents", d: "Génère les agents depuis Notion." },
            { n: "2", t: "review-guidelines", d: "Passe la PR au filtre équipe." },
            { n: "3", t: "release-notes", d: "Récupère commits + Jira." },
          ].map((s) => (
            <div key={s.n} className="rounded-xl border border-amber-500/30 bg-white/[0.04] p-4">
              <div className="mb-2 text-xs font-bold text-amber-300">
                Étape {s.n}
              </div>
              <div className="font-mono text-[13px] font-semibold text-ink">
                {s.t}
              </div>
              <div className="mt-1 text-[13px] text-ink/70">{s.d}</div>
            </div>
          ))}
        </div>
      </HumanCallout>

      <KeyTakeaway
        items={[
          "Un skill = un savoir-faire nommé, activable à la demande.",
          "Composable : plusieurs skills peuvent collaborer sur un même prompt.",
          "Documenté une fois, exécuté partout dans l'équipe.",
        ]}
      />
      <PrevNext current={4} />
    </Section>
  );
}

/* ==============================================================
 * SECTION 5 — Plugins
 * ============================================================ */
export function Section5() {
  const layers = [
    { name: "skills/", desc: "Compétences activables", color: "from-indigo-500 to-indigo-400" },
    { name: "agents/", desc: "Agents spécialisés", color: "from-violet-500 to-fuchsia-400" },
    { name: "hooks/", desc: "Déclencheurs pre/post", color: "from-pink-500 to-rose-400" },
    { name: "commands/", desc: "Commandes /shortcut", color: "from-amber-500 to-orange-400" },
  ];
  const matrix = [
    { need: "Imposer une convention", pick: "Rule" },
    { need: "Encapsuler un savoir-faire", pick: "Skill" },
    { need: "Distribuer un pack complet", pick: "Plugin" },
    { need: "Brancher un outil externe", pick: "MCP" },
  ];
  return (
    <Section id="s5" num="05">
      <Eyebrow index="Section 05" duration="~5 min">
        Plugins
      </Eyebrow>
      <SectionTitle>Un plugin, c'est un pack.</SectionTitle>
      <SectionLead>
        Skills, agents, hooks et commandes — regroupés dans un dossier
        installable. Rien à voir avec une extension VS Code.
      </SectionLead>

      <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
        <div className="flex items-start gap-3 text-[14px] text-amber-200">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            <strong>Attention :</strong> un plugin Codex n'est pas une extension VS
            Code. Il ne modifie pas l'IDE — il étend l'agent.
          </span>
        </div>
      </div>

      {/* Layered box */}
      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="relative mx-auto flex w-full max-w-sm flex-col gap-3">
          <div className="mb-2 text-center font-mono text-xs text-ink-soft">
            plugin-human/
          </div>
          {layers.map((l, i) => (
            <div
              key={l.name}
              className={`relative rounded-xl bg-gradient-to-r ${l.color} p-[1px] shadow-soft`}
              style={{
                transform: `translateX(${i * 12}px)`,
                zIndex: layers.length - i,
              }}
            >
              <div className="rounded-[11px] bg-surface-raised px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-ink">
                    {l.name}
                  </span>
                  <Layers className="h-4 w-4 text-ink-soft" />
                </div>
                <div className="mt-0.5 text-[13px] text-ink-soft">{l.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="rounded-2xl border border-hairline bg-surface-raised p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-2">
              <Badge tone="brand">Exemple</Badge>
              <span className="text-sm font-medium text-ink">
                Superpowers
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Un plugin communautaire qui empile plusieurs skills utiles : debug
              systématique, revue, refactor guidé. À explorer, pas à imposer.
              À utiliser comme référence pour construire ses propres plugins.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-hairline bg-surface-raised shadow-soft">
            <div className="grid grid-cols-2 border-b border-hairline bg-ink/[0.02] px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-ink-soft">
              <span>Besoin</span>
              <span>Piste</span>
            </div>
            {matrix.map((m, i) => (
              <div
                key={m.need}
                className={`grid grid-cols-2 items-center px-5 py-3 text-sm ${
                  i < matrix.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <span className="text-ink">{m.need}</span>
                <span>
                  <Badge tone="brand">{m.pick}</Badge>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <KeyTakeaway
        items={[
          "Un plugin = un pack, pas une extension IDE.",
          "Choisir la bonne piste (Rule/Skill/Plugin/MCP) évite 80% du bruit.",
          "S'inspirer des plugins communautaires avant d'écrire le sien.",
        ]}
      />
      <PrevNext current={5} />
    </Section>
  );
}

/* ==============================================================
 * SECTION 6 — MCP (dark)
 * ============================================================ */
export function Section6() {
  return (
    <Section id="s6" num="06" dark>
      <Eyebrow index="Section 06" duration="~7 min">
        <span className="text-white/70">Model Context Protocol</span>
      </Eyebrow>
      <SectionTitle dark>Brancher l'agent au monde réel.</SectionTitle>
      <SectionLead dark>
        MCP est un protocole standard : l'agent parle à un serveur, le serveur
        parle à un outil. Un adaptateur universel pour la stack.
      </SectionLead>

      {/* Flow diagram */}
      <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
        {[
          { t: "Agent Codex", d: "Formule une intention", icon: Sparkles },
          { t: "Serveur MCP", d: "Traduit en appel outil", icon: Server },
          { t: "SonarQube", d: "Rend un résultat structuré", icon: Cpu },
        ].map((n, i) => (
          <Fragment key={n.t}>
            <div
              className="rounded-2xl border border-white/10 bg-surface-raised/[0.04] p-5 backdrop-blur"
            >
              <div className="mb-2 flex items-center gap-2">
                <n.icon className="h-4 w-4 text-indigo-300" />
                <span className="eyebrow text-white/60">Étape 0{i + 1}</span>
              </div>
              <div className="text-lg font-semibold text-white">{n.t}</div>
              <div className="mt-1 text-sm text-white/60">{n.d}</div>
            </div>
            {i < 2 && (
              <div className="hidden justify-center lg:flex">
                <ArrowRight className="h-5 w-5 text-white/40" />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      {/* Human fiches */}
      <div className="mt-14">
        <div className="eyebrow mb-4 text-white/70">Chez Human · nos MCP</div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Cpu, t: "SonarQube", d: "Lit les issues de qualité sur la branche courante." },
            { icon: Database, t: "SQL Server", d: "Introspection schéma + requêtes read-only." },
            { icon: FileText, t: "Notion", d: "Récupère guidelines et décisions produit." },
          ].map((m) => (
            <div
              key={m.t}
              className="rounded-2xl border-l-4 p-5"
              style={{
                borderColor: "var(--human-border)",
                background: "rgba(212, 160, 23, 0.08)",
              }}
            >
              <div className="mb-3 flex items-center gap-2">
                <m.icon className="h-4 w-4 text-amber-300" />
                <HumanLogo className="text-[12px] text-white/85" />
              </div>
              <div className="text-lg font-semibold text-white">{m.t}</div>
              <div className="mt-1 text-sm text-white/70">{m.d}</div>
            </div>
          ))}
        </div>
      </div>

      <KeyTakeaway
        dark
        items={[
          "MCP standardise la connexion agent ↔ outil externe.",
          "Un serveur MCP = un adaptateur autonome, réutilisable partout.",
          "N'exposez que ce qui est nécessaire : moins d'outils = meilleur agent.",
        ]}
      />
      <PrevNext current={6} />
    </Section>
  );
}

/* ==============================================================
 * SECTION 7 — Agents
 * ============================================================ */
export function Section7() {
  const pipe = [
    { t: "Notion", d: "Guidelines source" },
    { t: "Export .md", d: "Publish pipeline" },
    { t: "Repo Agents", d: "Versionné, PRs" },
    { t: "build-guideline-agents", d: "Skill de génération" },
    { t: "~40 agents guideline-*", d: "Un par domaine" },
    { t: "Orchestrateur", d: "Dispatch par PR" },
    { t: "review-guidelines", d: "Skill runner" },
    { t: "Rapport", d: ".codex/guideline-review/" },
  ];
  return (
    <Section id="s7" num="07">
      <Eyebrow index="Section 07" duration="~8 min">
        Système d'agents
      </Eyebrow>
      <SectionTitle>Un agent, plusieurs agents, un système.</SectionTitle>
      <SectionLead>
        Un agent n'est utile qu'à petite dose. En équipe, ce qui change la donne
        c'est de les orchestrer — chacun spécialisé, tous coordonnés par un skill.
      </SectionLead>

      {/* Pipeline */}
      <div className="mt-14 overflow-x-auto">
        <div className="flex min-w-[900px] items-stretch gap-3">
          {pipe.map((n, i) => (
            <Fragment key={n.t}>
              <div
                className="w-40 shrink-0 rounded-xl border border-hairline bg-surface-raised p-4 shadow-soft"
              >
                <div className="eyebrow mb-1">Étape {String(i + 1).padStart(2, "0")}</div>
                <div className="font-mono text-[13px] font-semibold text-ink">{n.t}</div>
                <div className="mt-1 text-[12px] text-ink-soft">{n.d}</div>
              </div>
              {i < pipe.length - 1 && (
                <div className="flex items-center">
                  <div className="h-px w-3 bg-gradient-to-r from-indigo-400 to-violet-400" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <HumanCallout title="Pourquoi cette pipeline chez nous">
        Les guidelines vivent dans Notion (edité par les leads). Un job publie en
        markdown. <code className="font-mono text-[13px]">build-guideline-agents</code>{" "}
        régénère nos ~40 agents dans le repo. À l'ouverture d'une PR,
        l'orchestrateur dispatche automatiquement les bons agents et écrit un
        rapport dans <code className="font-mono text-[13px]">.codex/guideline-review/</code>.
      </HumanCallout>

      {/* Sub visual: PR review */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-surface-raised shadow-soft">
        <div className="flex items-center gap-3 border-b border-hairline bg-ink/[0.02] px-6 py-4">
          <GitPullRequest className="h-5 w-5 text-indigo-500" />
          <div className="min-w-0">
            <div className="text-sm font-semibold text-ink">
              PR #842 · feat(orders): async pipeline
            </div>
            <div className="text-xs text-ink-soft">3 agents dispatchés en parallèle</div>
          </div>
          <span className="ml-auto text-xs text-ink-soft">il y a 12s</span>
        </div>
        <div className="divide-y divide-hairline">
          {[
            { agent: "linter", tone: "success" as const, tag: "Suggestion", msg: "Extraire la constante MaxRetries dans la config." },
            { agent: "ef-core", tone: "warning" as const, tag: "Warning", msg: "AsNoTracking manquant sur GetOrdersAsync." },
            { agent: "bunit", tone: "danger" as const, tag: "Blocking", msg: "Composant OrderList sans test de rendu." },
          ].map((f) => (
            <div key={f.agent} className="grid grid-cols-[auto_1fr_auto] items-start gap-4 px-6 py-4">
              <span className="mt-0.5 font-mono text-[12px] font-semibold text-indigo-600">
                @{f.agent}
              </span>
              <span className="text-[14px] text-ink">{f.msg}</span>
              <Badge tone={f.tone}>{f.tag}</Badge>
            </div>
          ))}
        </div>
      </div>

      <KeyTakeaway
        items={[
          "Un agent seul n'est qu'un raccourci — un système d'agents change l'échelle.",
          "Spécialisez, orchestrez, versionnez : chaque brique reste lisible.",
          "La revue humaine reste la dernière porte — l'agent prépare, on décide.",
        ]}
      />
      <PrevNext current={7} />
    </Section>
  );
}

/* ==============================================================
 * SECTION 8 — Anti-patterns
 * ============================================================ */
function FlipCard({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className="group relative h-40 w-full text-left"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* front */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-hairline bg-surface-raised p-5 shadow-soft"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="grid h-7 w-7 place-items-center rounded-full text-white"
              style={{ backgroundColor: "var(--danger)" }}
            >
              <X className="h-4 w-4" />
            </span>
            <span className="eyebrow text-red-300">Erreur</span>
          </div>
          <p className="text-[15px] font-medium text-ink">{front}</p>
          <span className="text-[11px] text-ink-soft">Cliquer pour voir le réflexe →</span>
        </div>
        {/* back */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 shadow-soft"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="grid h-7 w-7 place-items-center rounded-full text-white"
              style={{ backgroundColor: "var(--success)" }}
            >
              <Check className="h-4 w-4" />
            </span>
            <span className="eyebrow text-emerald-300">Bon réflexe</span>
          </div>
          <p className="text-[15px] font-medium text-ink">{back}</p>
          <span className="text-[11px] text-emerald-300/70">Cliquer pour revenir</span>
        </div>
      </div>
    </button>
  );
}

export function Section8() {
  const cards = [
    { front: "Copier-coller depuis Gemini sans relire.", back: "Ouvrir un chat agent avec le fichier attaché, itérer." },
    { front: "Prompt vague : « fais mieux ».", back: "Contexte + contrainte + critère d'acceptation." },
    { front: "Pas de rules dans le repo.", back: "5 règles utiles, versionnées, dès le sprint 1." },
    { front: "« Refactorise tout le projet ».", back: "Un fichier à la fois, avec test de non-régression." },
    { front: "Ignorer le MCP SQL et deviner le schéma.", back: "Laisser l'agent introspecter en read-only." },
    { front: "Accepter le diff sans lecture ligne à ligne.", back: "Toujours relire le diff, l'agent se trompe." },
  ];
  return (
    <Section id="s8" num="08">
      <Eyebrow index="Section 08" duration="~5 min">
        Anti-patterns
      </Eyebrow>
      <SectionTitle>Six pièges, six réflexes.</SectionTitle>
      <SectionLead>
        Cliquer sur chaque carte : l'erreur au recto, le bon réflexe au verso.
      </SectionLead>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <FlipCard key={i} front={c.front} back={c.back} />
        ))}
      </div>

      <HumanCallout title="Rituel avant PR">
        Lancez <code className="font-mono text-[13px]">review-guidelines</code>{" "}
        avant d'ouvrir une PR. Trois minutes pour éviter deux heures de
        commentaires.
      </HumanCallout>

      <KeyTakeaway
        items={[
          "Le bon prompt est spécifique, contraint et vérifiable.",
          "L'agent propose, on relit — pas l'inverse.",
          "Les rules et skills sont des garde-fous : les utiliser.",
        ]}
      />
      <PrevNext current={8} />
    </Section>
  );
}

/* ==============================================================
 * SECTION 9 — Quiz
 * ============================================================ */
type Q = { q: string; opts: string[]; correct: number; explain: string };
const QUIZ: Q[] = [
  { q: "Quelle est la vraie différence entre chat web et agent IDE ?", opts: ["L'accès au contexte du repo", "Le modèle utilisé", "Le prix", "La vitesse de réponse"], correct: 0, explain: "Même famille de modèles sous le capot — c'est l'accès au contexte qui change tout." },
  { q: "Où mettre les conventions équipe pour qu'un agent les respecte ?", opts: ["Un canal Slack", "README.md", ".vscode/settings.json", ".codex/rules/"], correct: 3, explain: "Les fichiers .codex/rules/ sont lus à chaque prompt." },
  { q: "Un plugin Codex, c'est…", opts: ["Une extension VS Code", "Un modèle IA", "Un pack skills/agents/hooks/commands", "Un serveur cloud"], correct: 2, explain: "Un pack installable qui étend l'agent, pas l'IDE." },
  { q: "MCP sert à…", opts: ["Brancher un outil externe à l'agent", "Compresser le contexte", "Générer des tests", "Chiffrer les prompts"], correct: 0, explain: "MCP = protocole standard agent ↔ outil." },
  { q: "Attacher un @dossier entier a pour effet…", opts: ["D'améliorer toujours la réponse", "De protéger les secrets", "De désactiver les rules", "De consommer beaucoup de contexte"], correct: 3, explain: "Un dossier peut saturer la jauge — préférer le fichier précis." },
  { q: "Un skill, c'est…", opts: ["Un modèle fine-tuné", "Une extension IDE", "Un savoir-faire packagé activable", "Une commande Git"], correct: 2, explain: "Un skill = prompt + outils + mode opératoire, réutilisable." },
  { q: "~40 guidelines à faire respecter. Que faire ?", opts: ["Générer 40 agents spécialisés", "Tout mettre dans une seule rule", "Ignorer, trop long", "Faire un README géant"], correct: 0, explain: "Un système d'agents scale mieux qu'une mega-rule." },
  { q: "Un agent propose un diff. Quelle est la bonne étape suivante ?", opts: ["Merger direct", "Copier dans un chat web", "Écrire une nouvelle rule", "Relire ligne à ligne"], correct: 3, explain: "L'agent se trompe — la relecture ligne à ligne reste obligatoire." },
  { q: "Pour brancher SQL Server à l'agent en lecture seule, on utilise…", opts: ["Un skill", "Un serveur MCP", "Une rule", "Un hook Git"], correct: 1, explain: "MCP est le bon canal pour un outil externe." },
  { q: "Avant d'ouvrir une PR, lancez…", opts: ["git push --force", "npm audit", "review-guidelines", "codex --reset"], correct: 2, explain: "Notre rituel équipe : trois minutes de review-guidelines." },
];

export function Section9() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUIZ.length).fill(null),
  );
  const [showResult, setShowResult] = useState(false);
  const cur = QUIZ[step];
  const answered = answers[step] !== null;
  const score = answers.filter((a, i) => a === QUIZ[i].correct).length;
  const done = showResult || answers.every((a) => a !== null);

  function pick(i: number) {
    if (answered) return;
    const next = [...answers];
    next[step] = i;
    setAnswers(next);
  }

  function reset() {
    setStep(0);
    setAnswers(Array(QUIZ.length).fill(null));
    setShowResult(false);
  }

  return (
    <Section id="s9" num="09">
      <Eyebrow index="Section 09" duration="~5 min">
        Quiz final
      </Eyebrow>
      <SectionTitle>Prêt pour l'agent ?</SectionTitle>
      <SectionLead>
        Dix questions, une par écran. ≥ 8/10 débloque le badge Agent-ready.
      </SectionLead>

      {!done ? (
        <div className="mt-12 rounded-3xl border border-hairline bg-surface-raised p-8 shadow-raised sm:p-12">
          {/* Progress dots */}
          <div className="mb-8 flex items-center gap-1.5">
            {QUIZ.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < step
                    ? "bg-gradient-brand"
                    : i === step
                      ? "bg-ink/40"
                      : "bg-ink/10"
                }`}
              />
            ))}
          </div>
          <div className="eyebrow mb-3">
            Question {step + 1} / {QUIZ.length}
          </div>
          <h3 className="text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            {cur.q}
          </h3>

          <div className="mt-8 grid gap-3">
            {cur.opts.map((opt, i) => {
              const picked = answers[step] === i;
              const isRight = i === cur.correct;
              const state = !answered
                ? "idle"
                : picked && isRight
                  ? "right"
                  : picked && !isRight
                    ? "wrong"
                    : isRight
                      ? "reveal"
                      : "muted";
              const styles: Record<string, string> = {
                idle: "border-hairline bg-surface-raised hover:border-ink/30 hover:bg-ink/[0.02]",
                right: "border-emerald-700/80 bg-emerald-600/20 text-ink",
                wrong: "border-red-700/80 bg-red-600/20 text-ink",
                reveal: "border-emerald-700/80 bg-emerald-600/20 text-ink",
                muted: "border-hairline bg-surface-raised opacity-60",
              };
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  disabled={answered}
                  className={`flex items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left text-[15px] font-semibold transition-all ${styles[state]}`}
                >
                  <span>{opt}</span>
                  {answered && isRight && (
                    <Check className="h-5 w-5 text-emerald-800" />
                  )}
                  {answered && picked && !isRight && (
                    <X className="h-5 w-5 text-red-800" />
                  )}
                </button>
              );
            })}
          </div>

          {answered && (
            <div
              className={`mt-6 rounded-xl border px-4 py-3 text-[14px] font-medium ${
                answers[step] === cur.correct
                  ? "border-emerald-700/50 bg-emerald-600/15 text-ink"
                  : "border-red-700/50 bg-red-600/15 text-ink"
              }`}
            >
              <strong>
                {answers[step] === cur.correct ? "Bonne réponse. " : "Faux. "}
              </strong>
              {cur.explain}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédente
            </button>
            {step < QUIZ.length - 1 ? (
              <ButtonPrimary
                onClick={() => setStep((s) => s + 1)}
                disabled={!answered}
                className={!answered ? "pointer-events-none opacity-50" : ""}
              >
                Question suivante
              </ButtonPrimary>
            ) : (
              <ButtonPrimary
                onClick={() => setShowResult(true)}
                disabled={!answered}
                className={!answered ? "pointer-events-none opacity-50" : ""}
              >
                Voir le score
              </ButtonPrimary>
            )}
          </div>
        </div>
      ) : (
        <QuizResult score={score} onReset={reset} />
      )}
      <PrevNext current={9} />
    </Section>
  );
}

function QuizResult({ score, onReset }: { score: number; onReset: () => void }) {
  const passed = score >= 8;
  return (
    <div className="relative mt-12 overflow-hidden rounded-3xl border border-hairline bg-surface-raised p-10 text-center shadow-raised sm:p-16">
      {passed && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(124,58,237,0.15), transparent 50%)",
          }}
        />
      )}
      <div className="relative">
        <div
          className={`mx-auto grid h-24 w-24 place-items-center rounded-full ${
            passed ? "bg-gradient-brand shadow-raised" : "bg-ink/5"
          }`}
        >
          {passed ? (
            <Award className="h-12 w-12 text-white" />
          ) : (
            <Zap className="h-12 w-12 text-ink-soft" />
          )}
        </div>
        <div className="eyebrow mt-6">Score final</div>
        <div className="mt-2 text-6xl font-bold tabular-nums text-ink">
          {score}
          <span className="text-ink-soft">/{QUIZ.length}</span>
        </div>
        <h3 className="mt-6 text-3xl font-bold tracking-tight text-ink">
          {passed ? "Badge Agent-ready débloqué." : "Presque. Refaites un tour."}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-ink-soft">
          {passed
            ? "Bons réflexes validés. Lancer un premier projet Codex avec les rules équipe."
            : "Reprendre les sections ratées. La courbe est courte."}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonPrimary onClick={onReset}>
            <RotateCcw className="h-4 w-4" /> Recommencer le quiz
          </ButtonPrimary>
          <a href="#hero">
            <ButtonSecondary>Retour au début</ButtonSecondary>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ==============================================================
 * FOOTER
 * ============================================================ */
export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-raised">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
        <div>
          <HumanLogo className="text-base" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Parcours interactif · ~45 min · Aucune connexion requise.
            <br />
            Site statique local, fonctionne offline.
          </p>
          <div className="mt-6">
            <a href="#hero">
              <ButtonSecondary>
                <RotateCcw className="h-4 w-4" />
                Recommencer le parcours
              </ButtonSecondary>
            </a>
          </div>
        </div>
        <div>
          <div className="eyebrow mb-4">Sections 01 → 05</div>
          <ul className="space-y-2 text-sm">
            {SECTIONS.slice(1, 6).map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-ink-soft transition-colors hover:text-ink">
                  <span className="font-mono text-[11px] text-ink-soft/60">{s.num}</span>{" "}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Sections 06 → 09</div>
          <ul className="space-y-2 text-sm">
            {SECTIONS.slice(6).map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-ink-soft transition-colors hover:text-ink">
                  <span className="font-mono text-[11px] text-ink-soft/60">{s.num}</span>{" "}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-xs text-ink-soft lg:px-10">
          <span>© Human · Onboarding IA Développeur</span>
          <span>Aucun logo tiers officiel · aucune donnée envoyée</span>
        </div>
      </div>
    </footer>
  );
}