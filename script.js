// =========================================================
// 1. LIGHT / DARK THEME TOGGLE
// The <script> in index.html's <head> already applied a saved choice.
// Here we handle clicks and save the new choice.
// =========================================================
const root = document.documentElement;
const themeButton = document.getElementById("theme-toggle");

function currentTheme() {
  const set = root.getAttribute("data-theme");
  if (set) return set;
  // No saved choice yet: use the operating system setting
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

themeButton.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // Storage can be blocked (e.g. private mode). The theme still switches for this visit.
  }
});

// =========================================================
// 2. MOBILE MENU (hamburger)
// =========================================================
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close the menu after tapping a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });
});

// =========================================================
// 3. IMPACT CHART
// Real numbers from my resume. To add a bar, add an object to this list.
// =========================================================
const impactData = [
  { label: "Admin time saved", source: "Nonprofit CRM · UB", value: 30 },
  { label: "Inventory spending cut", source: "OG Dumpling House", value: 20 },
  { label: "Customer traffic increase", source: "Social media ads", value: 20 },
  { label: "Fewer coordination emails", source: "PTO system · Sevenson", value: 20 },
  { label: "Research time cut", source: "Personal AI agent", value: 20 },
  { label: "Faster project startup", source: "Power BI dashboard · Sevenson", value: 10 },
];

function renderChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Scale bars so the biggest value fills most of the track
  const max = Math.max(...data.map((d) => d.value));

  data.forEach((d) => {
    const row = document.createElement("div");
    row.className = "chart-row";
    row.setAttribute("role", "listitem");
    row.setAttribute("aria-label", `${d.label}: ${d.value}% (${d.source})`);

    const widthPercent = (d.value / max) * 100;

    row.innerHTML = `
      <div class="chart-label">${d.label}<small>${d.source}</small></div>
      <div class="chart-track" aria-hidden="true">
        <div class="chart-bar-bg"><div class="chart-bar" style="width:${widthPercent}%"></div></div>
        <span class="chart-value">${d.value}%</span>
      </div>`;
    container.appendChild(row);
  });
}

renderChart("impact-chart", impactData);

// =========================================================
// 4. FOOTER YEAR (updates automatically every year)
// =========================================================
document.getElementById("year").textContent = new Date().getFullYear();
