import { profile } from "../data.js";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <h2>Contact</h2>
        <p>I'm open to internships and new opportunities. The best way to reach me is by email.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </section>
  );
}
