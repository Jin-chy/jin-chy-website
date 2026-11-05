# Changye Jin — Personal Website

A simple, single-page portfolio built with plain **HTML, CSS, and JavaScript**. It has no framework and no build step, and it's hosted on **Vercel**.

## Files

| File | What it does |
|---|---|
| `index.html` | All the content: hero, about, experience, skills, projects, contact |
| `styles.css` | Look and layout. Colors are variables at the top (light and dark themes) |
| `script.js` | Theme toggle, mobile menu, impact chart, footer year |
| `assets/resume.pdf` | The resume behind the "Download Resume" button |

## Editing

- **Text:** edit `index.html` directly. Search for `TODO` to find placeholders (LinkedIn URL, Spotify notebook link, planned project).
- **Add a project:** copy an `<article class="project card">…</article>` block in the Projects section. The status badge classes are `status-done`, `status-progress` and `status-planned`.
- **Chart numbers:** edit the `impactData` list in `script.js`.
- **Colors:** change the variables at the top of `styles.css`.
- **Resume:** replace `assets/resume.pdf` with a new file of the same name.

## Preview locally

Open `index.html` in a browser (double-click it, or run `open index.html`).

## Deploying

The repo is connected to Vercel, so every `git push` to `main` redeploys the site automatically:

```bash
git add .
git commit -m "Describe your change"
git push
```
