import { facts } from "../data.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2>About</h2>
        <div className="about-grid">
          <div>
            <p>
              I'm a B.S. Information Technology &amp; Management student in UB's 4+1 MS in Management
              Information Systems program, with a minor in Cybersecurity, graduating in May 2027.
            </p>
            <p>
              I like turning messy data into clear decisions. I've built Power BI dashboards, organized
              hundreds of project records, set up a CRM from scratch, and analyzed 100,000+ Spotify tracks in Python.
            </p>
            {/* TODO: adjust this line to the roles you're targeting */}
            <p className="looking-for">
              <strong>Looking for:</strong> internships and entry-level roles in data analysis, IT, and information systems.
            </p>
          </div>

          <dl className="facts card">
            {facts.map((fact) => (
              <div key={fact.title}>
                <dt>{fact.title}</dt>
                <dd>
                  {fact.lines.map((line) => (
                    <span className="line" key={line}>{line}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
