# Researchers' Career Paths Colombia

Scientific, multilingual website for the longitudinal analysis of researchers' trajectories in the Colombian STI system (2013–2025).

## Languages

- `/en` English (default)
- `/es` Español
- `/fr` Français

The root URL `/` redirects to `/en`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## GitHub repository

Target repository:

```text
https://github.com/edwinariasb/researchers-career-paths-colombia.git
```

## First push

From this project directory:

```bash
git init
git add .
git commit -m "Initial scientific multilingual redesign"
git branch -M main
git remote add origin https://github.com/edwinariasb/researchers-career-paths-colombia.git
git push -u origin main
```

If the GitHub repository already contains a README or another commit, clone the repository first and copy these files into it rather than running the commands above blindly.

## Connect to Vercel

1. Open the existing Vercel project `researcherscareerpathscol`.
2. Go to **Settings → Git**.
3. Click **GitHub**.
4. Authorize Vercel if requested.
5. Select `edwinariasb/researchers-career-paths-colombia`.
6. Set `main` as the Production Branch.
7. Vercel should detect Next.js automatically.
8. Build command: `next build` (automatic).
9. Output directory: leave automatic/default.
10. Deploy.

## Recommended safe workflow

For later changes:

```bash
git checkout -b scientific-redesign
git add .
git commit -m "Update scientific visualisations"
git push -u origin scientific-redesign
```

Vercel will create a Preview Deployment. After validation, merge into `main`.

## Scientific data currently embedded

The starter site includes the validated headline numbers and flow values used in the project:

- 38,472 unique researchers
- 2,532 unique sequence patterns
- 5 trajectory types
- 25,478 recognised researchers in 2025
- flow counts for 2013→2014 through 2022→2025

### Important

The fourth and fifth trajectory labels/percentages in `src/data/site.ts` are placeholders to complete the visual 5-type layout because only three final labels/percentages were available in the current project context. Replace them with the validated final values before public release.

## Add the OECD poster PDF

Place the final poster at:

```text
public/oecd-blue-sky-2026-poster.pdf
```

Then replace the placeholder button in `src/components/Site.tsx` with:

```tsx
<a className="btn primary" href="/oecd-blue-sky-2026-poster.pdf" target="_blank">...</a>
```

You can also add a poster thumbnail under `public/` and replace the current visual placeholder.
