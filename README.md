# Abrar — Portfolio MVP v0.3

A minimal, premium, dark-mode portfolio built with **React, TypeScript, Vite, React Router, and custom CSS**. This version includes the revised hero and About copy, complete HydraSeg results and visuals (excluding code commands), updated project tags, and revised project-page flow.

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- An internet connection to install dependencies and load the original HydraSeg figures from GitHub

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173** in your browser. If 5173 is occupied, Vite prints the port actually used.

Build for deployment:

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/Home.tsx` — homepage: hero portrait, Work, Projects, Power BI dashboards, publication, about, education, skills, contact.
- `src/pages/ProjectDetail.tsx` — detailed case studies. HydraSeg shows ADE20K 224×224 and 512×512 result tables, Figures 1–8, computational complexity, forward runtime, image/video inference timings, and the animated `out3.gif`. Radiation architecture appears immediately after its approach.
- `src/pages/Dashboards.tsx` — three original Power BI report embeds.
- `src/data/content.ts` — the main editable content file, including professional experiences, project descriptions, links, skills, education, languages and publication.
- `src/styles.css` — original design plus v0.2 responsive typography and layout refinements.
- `public/images/abrar-portrait.webp` — an optimized copy of the portrait provided for this portfolio.

## Changes in v0.3

- Hero subtitle and About paragraphs replaced with the exact approved wording.
- Added a **Publication** item to the desktop and mobile header.
- Updated Osmania University location to **Hyderabad, India**.
- Removed Python from HydraSeg project tags; Dr.Detect now emphasizes **Object Detection** and **Healthcare**; Swachh-Companion now uses **Waste Classification, Flutter, TensorFlow Lite, Volunteering**.
- HydraSeg uses compact, max-width figures and mobile-scrollable benchmark tables. It shows the full evaluation set from the original README: architecture Figures 1–3, ADE20K 224×224 + 512×512 results and Figures 4–5, complexity and runtime tables, the trade-off graph (Figure 6), image inference (Figure 7) and timing table, plus video inference (Figure 8 / `out3.gif`) and timing table. Training / inference CLI snippets intentionally omitted.
- Radiation Tracking system architecture moved directly after **How it works**.

## Earlier changes (v0.1 → v0.2)

1. Broadened the hero narrative to product, project delivery, technical business analysis, software, AI and sustainability.
2. Added a portrait to the hero and moved Work before Projects.
3. Removed role counters and mini skill tags from each experience entry, increased company/date/body typography.
4. Added original HydraSeg architecture images, segmentation sample, trade-off graph and benchmark table to its project page. **These diagrams are fetched from the public GitHub repository at display time**; they are not copied into `public/`.
5. Replaced the Radiation Tracking flowchart with an ordered, editorial architecture section based on its README.
6. Improved the publication summary with the challenge's **0.972 AUC**, supplied in the publication abstract.
7. Rebuilt About, Education, Languages and Tools & Expertise layouts with readable font sizes and skill groupings that lead with product/delivery capabilities.
8. Added actual LinkedIn URL and made LinkedIn the primary contact action. No unpublished email or resume link was invented.

## Notes on accuracy and publishing

- The circular-economy thesis is clearly marked **in progress**; possible extensions are not presented as completed systems.
- Radiation Tracking is described as a **collaborative TUHH project**. Abrar is credited as team coordinator in the repository README.
- HydraSeg metrics reproduce values **reported in the public README**. The summary table deliberately combines values from different published evaluation sections; it does **not** represent one uniform benchmarking run.
- The healthcare research prototype is experimental, not a clinically validated diagnostic tool.
- Professional impact figures are from the supplied CV. Confirm them before publicly deploying.
- Original Power BI embedding may be subject to Microsoft's iframe/privacy restrictions; viewers can open reports separately if embedding is blocked.
- Name, LinkedIn, GitHub and Hamburg location come from the user's supplied information. An email address and resume link remain unset in the data model.

## Deployment

Vercel is simplest: push this folder to GitHub and import it to Vercel, choosing **Vite** with build command `npm run build` and output directory `dist`. The existing `vercel.json` supports React Router pages.

GitHub Pages is also possible, but requires adjusting the Vite base path and SPA handling when deploying to a project subpath.

## Asset note

HydraSeg plots and `out3.gif` are loaded from the public repository at runtime (`raw.githubusercontent.com`). The site needs an internet connection to display them. All tables are saved directly in the project source for offline reading.
