const projects = [
  { img: "https://images.pexels.com/photos/34946066/pexels-photo-34946066.jpeg?w=800", label: "Village Home Hall" },
  { img: "https://images.pexels.com/photos/32048482/pexels-photo-32048482.jpeg?w=800", label: "Rustic Kitchen" },
  { img: "https://images.pexels.com/photos/31925629/pexels-photo-31925629.jpeg?w=800", label: "Cozy Bedroom" },
  { img: "https://images.pexels.com/photos/28272359/pexels-photo-28272359.jpeg?w=800", label: "Traditional Hall" },
  { img: "https://images.pexels.com/photos/31944364/pexels-photo-31944364.jpeg?w=800", label: "Simple Village Kitchen" },
  { img: "https://images.pexels.com/photos/36195703/pexels-photo-36195703.jpeg?w=800", label: "Sunlit Bedroom" },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <span className="section-label">Recent Work</span>
      <h2 className="section-title">Portfolio</h2>
      <p className="section-sub">A selection of recent projects across residential and commercial interiors.</p>
      <div className="portfolio-grid">
        {projects.map((p) => (
          <div className="portfolio-item" key={p.label}>
            <img src={p.img} alt={p.label} />
            <div className="portfolio-caption">{p.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
