import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { navLinks } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          luminous
        </Link>

        <nav className="nav-links">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions nav-auth-desktop">
          <Link to="/signup" className="btn btn-light">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-dark">
            Log In
          </Link>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <Link
          to="/signup"
          className="btn btn-light btn-block"
          onClick={() => setOpen(false)}
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="btn btn-dark btn-block"
          onClick={() => setOpen(false)}
        >
          Log In
        </Link>
      </div>
    </header>
  );
}
