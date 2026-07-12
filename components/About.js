export default function About() {
  return (
    <section id="about">
      <div className="about">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"
          alt="Designer at work"
        />
        <div className="about-text">
          <span className="section-label left">About the Studio</span>
          <h2 className="section-title left">Design that feels like home</h2>
          <p>
            VC Collections is a full-service interior design practice specializing in
            residential and boutique commercial spaces. We believe good design should
            feel effortless — rooted in how you actually live, not just how a space photographs.
          </p>
          <p>
            From initial concept through final styling, we handle space planning,
            materials, furnishings, and project management so you can enjoy the
            process as much as the result.
          </p>
          <a href="https://wa.me/919666861423" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
