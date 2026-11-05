# Changye Jin — Personal Website

A single-page portfolio built with **React** and **Vite**, hosted on **Vercel**.

## Project structure

```
index.html              The HTML shell React draws into (plus meta tags)
public/resume.pdf       Served as /resume.pdf ("Download Resume" button)
src/
  main.jsx              Entry point: starts React
  App.jsx               The page, assembled from section components
  data.js               ALL the text and content. Edit this file most often
  styles.css            Colors (variables at the top) and layout
  components/           One file per section: Header, Hero, About, Experience,
                        ImpactChart, Skills, Projects, ProjectCard, Tags, Contact, Footer
```

## Run it on your computer

```bash
npm install      # first time only: downloads React and Vite into node_modules/
npm run dev      # starts a local server at http://localhost:5173 that updates as you save
```

## Editing

- **Text, jobs, skills, projects, chart numbers:** edit `src/data.js`. Search for `TODO` to find placeholders.
- **Add a project:** add an object to the `projects` list in `src/data.js`. `status` can be `"done"`, `"progress"` or `"planned"`.
- **Colors:** change the variables at the top of `src/styles.css`.
- **Resume:** replace `public/resume.pdf` with a new file of the same name.

## Deploying

Vercel detects Vite automatically: it runs `npm run build` and serves the `dist/` folder.
Every `git push` to `main` redeploys:

```bash
git add .
git commit -m "Describe your change"
git push
```
