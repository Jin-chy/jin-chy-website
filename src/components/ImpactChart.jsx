// A simple horizontal bar chart made from plain HTML + CSS (no chart library).
// `data` is passed in as a "prop" from Experience.jsx.
export default function ImpactChart({ data }) {
  // Scale bars so the biggest value fills the whole track
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="impact card">
      <h3>Results by the numbers</h3>
      <p className="muted">Measured improvements from my internships, job, and projects.</p>
      <ul className="chart" aria-label="Impact metrics">
        {data.map((d) => (
          <li className="chart-row" key={d.label}>
            <div className="chart-label">
              {d.label}
              <small>{d.source}</small>
            </div>
            <div className="chart-track">
              <div className="chart-bar-bg" aria-hidden="true">
                <div className="chart-bar" style={{ width: `${(d.value / max) * 100}%` }} />
              </div>
              <span className="chart-value">{d.value}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
