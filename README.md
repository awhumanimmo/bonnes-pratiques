# Agent Accelerator

Crée le design visuel d'un site de formation interactif single-page pour développeurs .NET qui apprennent à utiliser Cursor et les agents IA.

## Contexte produit
- Public : devs qui utilisent déjà Gemini/ChatGPT en chat web, mais pas Cursor (rules, skills, plugins, MCP, agents)
- Usage : parcours 100% autonome, ~45 min, sans animateur
- Langue : français
- Stack métier des lecteurs : .NET, C#, HTML, CSS
- Hébergement : site statique local/inranet, doit fonctionner offline

## Référence visuelle
S'inspirer fortement de https://pomelo.la/en :
- Landing premium fintech/tech
- Fond clair dominant (#F8F9FC / off-white), beaucoup d'espace blanc
- Typographie bold oversized, hiérarchie forte
- Scroll storytelling : chaque section = un chapitre
- Cartes modulaires arrondies (12-16px), ombres douces, dégradés bleu → violet sur les CTA
- Sections alternées clair / une section contrastée sombre pour le rythme
- Micro-labels en petites caps au-dessus des titres ("SECTION 03", "~5 MIN")
- Header sticky translucide (glassmorphism léger) avec barre de progression
- Animations subtiles au scroll (fade-in, parallax léger) — pas de style "hacker dark IDE"

## Branding hybride
- 90% neutre/pro (fonctionne pour toute équipe dev)
- 10% encarts "Chez Human" : bordure gauche ambre #D4A017, fond crème #FFF8E7, petit logo Human
- Logo Human discret dans le hero + favicon
- Ne pas utiliser les logos officiels Cursor, GitHub, Copilot

## Palette
- Background : #F8F9FC
- Surface/cards : #FFFFFF
- Texte : #0F172A
- Texte secondaire : #64748B
- Accent / CTA gradient : #4F46E5 → #7C3AED
- Succès : #10B981
- Erreur : #EF4444
- Human callout : border #D4A017, bg #FFF8E7
- Section contrastée (MCP) : fond #0F172A → #1E1B4B

## Typographie
- Sans-serif moderne géométrique (Inter, Outfit ou similaire)
- Mono pour les blocs code (JetBrains Mono style)
- Titres display : 48-56px bold, letter-spacing serré
- Corps : 18px, line-height confortable

## Structure — 10 sections scroll + hero + footer

### Header sticky
- Logo Human + titre "Onboarding IA Développeur"
- Barre de progression 0-100%
- Menu sommaire (drawer mobile / sidebar desktop) avec numéros de section et coches "vu"

### Section 0 — Hero
- Titre gradient : "De l'IA web à l'agent de code"
- Sous-titre : "Parcours interactif · ~45 min · Aucune connexion requise"
- Ligne confiance : "Pour développeurs .NET · C# · HTML · CSS"
- CTA pill gradient "Commencer le parcours"
- Visuel : split gauche = interface chat web générique, droite = IDE avec panneau IA, reliés par une flèche/flux

### Section 1 — "Le piège du chat web" (~5 min)
- Tableau comparatif élégant : Chat web vs Agent IDE (Contexte, Mémoire, Actions, Qualité code)
- Toggle interactif "Même prompt" : avant (code C# générique hors conventions) / après (code avec Result<T>, async, conventions API)
- Encadré "À retenir" (3 bullets avec icône check verte)

### Section 2 — "Tokens & contexte" (~5 min)
- Analogie auditorium / jauge de budget
- Chips cliquables : @fichier (+15%), @dossier (+60%), historique chat (+40%)
- Barre de progression qui se remplit
- Encadré "À retenir"

### Section 3 — "Rules" (~5 min)
- Bloc code .cursor/rules stylisé (fond sombre inset sur page claire)
- Split avant/après : code C# sans rules vs avec rules (Result<T>, français, async)
- Encart "Chez Human" ambre : conventions Result<T>, français, EditorConfig
- Encadré "À retenir"

### Section 4 — "Skills" (~5 min)
- 3 cartes accordéon style Pomelo use-cases : systematic-debugging, review-guidelines, brainstorming
- Encart "Chez Human" : skills build-guideline-agents + review-guidelines avec mini workflow 3 étapes
- Encadré "À retenir"

### Section 5 — "Plugins" (~5 min)
- Encadré warning : "Plugin Cursor ≠ extension VS Code"
- Visual "dézippeur" : boîte qui s'ouvre en 4 couches (skills/, agents/, hooks/, commands/) — inspiré du configurateur de cartes Pomelo
- Superpowers comme exemple mis en avant (pas imposé)
- Matrice besoin → piste (Rule / Skill / Plugin / MCP) en grille propre
- Encadré "À retenir"

### Section 6 — "MCP" (~7 min) — SECTION CONTRASTÉE SOMBRE
- Fond dark pour rupture visuelle
- Diagramme horizontal animé : Agent Cursor → Serveur MCP → Outil externe (SonarQube)
- 3 fiches encart Human : SonarQube, SQL Server, Notion
- Encadré "À retenir" adapté fond sombre

### Section 7 — "Agents" (~8 min) — section la plus riche
- Timeline/pipeline horizontal style Pomelo "modular system" :
  Notion → Export md → Repo Agents → build-guideline-agents → ~40 agents guideline-* → Orchestrateur → review-guidelines → Rapport .cursor/guideline-review/
- Encart "Chez Human" large
- Sous-visuel : PR fictive, 3 agents (linter, EF Core, bUnit) dispatchés en parallèle, findings avec badges Blocking/Warning/Suggestion
- Encadré "À retenir"

### Section 8 — "Anti-patterns" (~5 min)
- Grille 6 cartes flip ou accordéon : erreur au recto, bon réflexe au verso
- Thèmes : copier-coller Gemini, prompt vague, pas de rules, "refactorise tout", ignorer MCP SQL, accepter sans lire
- Encart Human : "Lancez review-guidelines avant la PR"
- Encadré "À retenir"

### Section 9 — "Quiz" (~5 min)
- 10 questions QCM, une à la fois
- Correction immédiate (vert/rouge + explication)
- Dots de progression
- Badge final "Agent-ready" si ≥ 8/10 — médaille avec confettis subtils
- Score affiché

### Footer
- "Recommencer le parcours"
- Liens rapides sections
- "~45 min · Aucune connexion requise"

## Composants réutilisables à designer
- Bouton primary (gradient pill)
- Bouton secondary (outline)
- Encart "À retenir" (fond blanc, bordure légère, icône check)
- Encart "Chez Human" (ambre)
- Bloc code (fond #1E293B, texte clair, coins arrondis)
- Carte flip
- Toggle comparateur avant/après
- Barre de progression header
- Item sommaire avec coche
- Carte quiz QCM
- Badge "Agent-ready"

## Navigation
- Sidebar desktop fixe à gauche avec scroll spy
- Drawer mobile
- Liens "Précédent / Suivant" en bas de chaque section
- Skip links accessibilité

## Contraintes
- Design ONLY d'abord — pas besoin d'implémenter la logique quiz/localStorage tout de suite, mais prévoir les états UI (quiz correct/incorrect, carte flip, toggle, jauge tokens, layers plugin)
- Responsive : desktop 1440px prioritaire + mobile 390px
- Accessibilité : contrastes WCAG AA, focus visible, prefers-reduced-motion
- Pas de mascotte cartoon, pas de thème dark global, pas de vidéo
- Ton : professionnel, direct, légèrement provocateur ("vous utilisez déjà l'IA, mais au mauvais endroit")
- Tout le texte placeholder en français

## Livrables attendus
1. Page complète desktop scroll
2. Version mobile (hero + 1 section contenu + quiz)
3. Page design system / composants
4. États interactifs annotés (hover, active, flip, quiz feedback)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7320bef6-147e-4e77-8b69-81f912a7a26a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
