import { experience, impact } from "../data.js";
import ImpactChart from "./ImpactChart.jsx";

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <h2>Experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline-item" key={job.role + job.company}>
              <div className="timeline-head">
                <h3>{job.role} · <span>{job.company}</span></h3>
                <span className="date">{job.dates}</span>
              </div>
              <ul>
                {job.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </li>
          ))}
        </ol>

        <ImpactChart data={impact} />
      </div>
    </section>
  );
}
