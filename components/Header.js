"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header>
      <a href="#top" className="logo">VC Collections</a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        &#9776;
      </button>
      <nav>
        <ul className={open ? "open" : ""}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
