# Copilot Instructions

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Type-check with tsc, then Vite production build
npm run lint       # ESLint (TypeScript + react-hooks + react-refresh rules)
npm run preview    # Preview production build locally
```

There is no test suite configured.

## Architecture

This is a portfolio site for **DEF Design Studio** — a Vietnamese architecture/interior/landscape firm. It is a purely static client-side SPA; all project data lives in `src/data/projects.ts` with no API calls.

**Routing** (`src/App.tsx`) — all routes share a single `<Layout>` wrapper (Header + Outlet + Footer):

| Path | Component |
|---|---|
| `/` | `HomePage` — filterable masonry grid of projects |
| `/projects/:id` | `ProjectDetailPage` — hero image, gallery, lightbox, prev/next nav |
| `/about` | `AboutPage` |
| `/contact` | `ContactPage` |

**Data model** — `Project` interface is exported from `src/data/projects.ts` alongside the `projects` array. Pages import data directly from there.

```ts
interface Project {
  id: string;           // kebab-case slug, used as the route :id param
  title: string;
  category: 'architecture' | 'interior' | 'landscape';
  year: number;
  location: string;
  description: string;
  coverImage: string;   // Unsplash URL ?w=800&q=80
  images: string[];     // first element is hero; rest are gallery (?w=1200&q=80)
  tags: string[];
}
```

## Key Conventions

**Tailwind CSS v4** — configured via the `@tailwindcss/vite` Vite plugin (no `tailwind.config.*` file). The only CSS file is `src/index.css`, which uses `@import "tailwindcss"` (v4 syntax, not `@tailwind` directives). Base styles are defined in `@layer base` there.

**Design tokens** — the site uses a monochromatic `stone-*` palette throughout. Base background is `#f9f9f7`, base text is `#1a1a1a`. Avoid introducing new color families.

**Component pattern** — all components and pages use default exports. Inline prop interfaces (not a separate types file):
```ts
interface Props { project: Project }
export default function ProjectCard({ project }: Props) { ... }
```

**Type imports** — use `import type` for type-only imports:
```ts
import type { Project } from '../data/projects';
```

**Adding a project** — add an entry to the `projects` array in `src/data/projects.ts`. The `id` field becomes the URL slug. Use Unsplash image URLs with `?w=800&q=80` for `coverImage` and `?w=1200&q=80` for `images[]`.

**TypeScript strictness** — `strict`, `noUnusedLocals`, and `noUnusedParameters` are all enabled. Fix any unused variable warnings before committing.

**No path aliases** — imports use relative paths (e.g., `'../data/projects'`, `'./Header'`).
