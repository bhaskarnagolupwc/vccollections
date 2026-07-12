const testimonials = [
  { quote: "VC Collections transformed our living room into something we actually want to spend time in. The process was smooth from start to finish.", name: "Priya R." },
  { quote: "They listened to exactly what we wanted and elevated it beyond what we imagined. Highly recommend for any renovation project.", name: "Damodhar P." },
  { quote: "Professional, responsive, and genuinely talented. Our new office space has gotten compliments from every client who visits.", name: "Deevika R." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <span className="section-label">Client Stories</span>
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <p>&ldquo;{t.quote}&rdquo;</p>
            <div className="testimonial-name">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
