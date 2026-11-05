import Tags from "./Tags.jsx";

const statusLabels = {
  done: "Completed",
  progress: "In progress",
  planned: "Planned",
};

export default function ProjectCard({ project }) {
  const { title, status, caseStudy, description, tags, link, linkPlaceholder } = project;

  return (
    <article className="project card">
      <span className={`status status-${status}`}>{statusLabels[status]}</span>
      <h3>{title}</h3>

      {/* Show the case-study steps if the project has them, otherwise a plain description */}
      {caseStudy ? (
        <dl className="case">
          {caseStudy.map((step) => (
            <div key={step.label}>
              <dt>{step.label}</dt>
              <dd>{step.text}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p>{description}</p>
      )}

      <Tags items={tags} small />

      {link && (
        <a className="project-link" href={link.href} target="_blank" rel="noopener">{link.label}</a>
      )}
      {!link && linkPlaceholder && <span className="project-link muted">{linkPlaceholder}</span>}
    </article>
  );
}
