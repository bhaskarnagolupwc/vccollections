"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919666861423";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const text = [
      `Hi, I'm ${name}.`,
      subject && `Project type: ${subject}`,
      message,
      email && `You can reach me at ${email}.`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setStatus("Opening WhatsApp...");
    form.reset();
  }

  return (
    <section id="contact" style={{ background: "#fff" }}>
      <span className="section-label">Let&apos;s Talk</span>
      <h2 className="section-title">Contact</h2>
      <p className="section-sub">Tell us about your space and we&apos;ll get back to you within two business days.</p>
      <div className="contact-wrap">
        <div className="contact-info">
          <h3>VC Collections</h3>
          <p><span className="label">Email</span> vccollections@gmail.com</p>
          <p><span className="label">Phone</span> <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">+91 96668 61423</a></p>
          <p><span className="label">Studio</span> Next to Suzuki Showroom, Main Madras Road, RLY Kodur, 516101</p>
          <p><span className="label">Hours</span> Mon–Fri, 9am–5pm</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Project Type (e.g. Full Home, Consultation)" />
          <textarea name="message" placeholder="Tell us about your project" required />
          <button type="submit">Send via WhatsApp</button>
          <div id="form-status">{status}</div>
        </form>
      </div>
    </section>
  );
}
