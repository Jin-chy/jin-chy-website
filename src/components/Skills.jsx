import { skills } from "../data.js";
import Tags from "./Tags.jsx";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="card" key={s.group}>
              <h3>{s.group}</h3>
              <Tags items={s.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
