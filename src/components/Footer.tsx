import { useState, type FormEvent } from "react";
import { Sparkles, Send } from "lucide-react";
import { XIcon, InstagramIcon, LinkedinIcon } from "./BrandIcons";

const SOCIALS = [
  { Icon: XIcon, label: "X (Twitter)" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="final-cta">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>Ready to Get Started?</h2>
          </div>

          <div className="final-form">
            <h4>Have any Questions? Get in our Help</h4>
            <form className="field" onSubmit={submit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-lime btn-icon" aria-label="Send">
                <Send size={18} />
              </button>
            </form>
            {sent && (
              <p style={{ marginTop: 12, fontSize: 14, color: "var(--lime)" }}>
                ✓ Thanks! We'll be in touch soon.
              </p>
            )}

            <div className="footer-social">
              <div className="footer-social-label">Social Media</div>
              <div className="social-row">
                {SOCIALS.map(({ Icon, label }) => (
                  <a href="#" key={label} className="social-btn" aria-label={label}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="brand">
            <span className="brand-mark">
              <Sparkles size={18} />
            </span>
            luminous
          </div>
          <div>© {YEAR} Luminous. All rights reserved.</div>
          <div>Built by Ziad Fissal</div>
        </div>
      </div>
    </footer>
  );
}
