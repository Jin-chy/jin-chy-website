export default function Footer() {
  // The year updates automatically
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">© {year} Changye Jin · Built with React &amp; Vite</div>
    </footer>
  );
}
