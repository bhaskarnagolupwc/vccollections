const services = [
  { icon: "⌂", title: "Full-Home Design", text: "End-to-end design and furnishing for entire homes, from layout to final styling." },
  { icon: "□", title: "Room Refresh", text: "Focused updates to a single room — new palette, furniture, and layout." },
  { icon: "✏", title: "Design Consultation", text: "A one-time working session with actionable recommendations you can implement yourself." },
  { icon: "\u{1F3E0}", title: "Renovation Planning", text: "Space planning and material selection coordinated alongside your contractor." },
  { icon: "\u{1F6E0}", title: "Custom Furnishing", text: "Sourcing and procurement of furniture, lighting, and decor tailored to your space." },
  { icon: "\u{1F3A8}", title: "Commercial Interiors", text: "Design for boutique offices, cafes, and retail spaces that reflect your brand." },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#fff" }}>
      <span className="section-label">What We Offer</span>
      <h2 className="section-title">Services</h2>
      <p className="section-sub">Every project starts with a conversation. Here&apos;s how we typically help.</p>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
