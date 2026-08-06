import { useState } from "react";
import {
  Sparkles,
  Send,
  Globe,
  MessageCircle,
  AtSign,
  Mail,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
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
            <span className="eyebrow" style={{ color: "#fb923c" }}>
              Get in touch
            </span>
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
              <button type="submit" className="btn btn-orange btn-icon" aria-label="Send">
                <Send size={18} />
              </button>
            </form>
            {sent && (
              <p style={{ marginTop: 12, fontSize: 14, color: "#7bb23f" }}>
                ✓ Thanks! We'll be in touch soon.
              </p>
            )}

            <div className="footer-social">
              <div className="footer-social-label">Social Media</div>
              <div className="social-row">
                <button className="social-btn" aria-label="Twitter">
                  <Globe size={18} />
                </button>
                <button className="social-btn" aria-label="Facebook">
                  <MessageCircle size={18} />
                </button>
                <button className="social-btn" aria-label="Instagram">
                  <AtSign size={18} />
                </button>
                <button className="social-btn" aria-label="LinkedIn">
                  <Mail size={18} />
                </button>
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
          <div>© 2026 Luminous. All rights reserved.</div>
          <div>Built by Ziad Fissal</div>
        </div>
      </div>
    </footer>
  );
}
