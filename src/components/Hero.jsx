import { profile } from "../data.js";

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <p className="eyebrow">Hi, I'm</p>
      <h1>{profile.name}</h1>
      <p className="hero-sub">
        Information Technology &amp; Management student at the University at Buffalo, focused on{" "}
        <strong>data analysis</strong>, <strong>IT systems</strong>, and <strong>cybersecurity</strong>.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href={profile.resume} download>Download Resume</a>
        <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noopener">GitHub</a>
        <a className="btn btn-secondary" href="#contact">Contact</a>
      </div>
    </section>
  );
}
