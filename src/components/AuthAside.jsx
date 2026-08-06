import { Link } from "react-router-dom";
import { Sparkles, Check } from "lucide-react";
import { authBenefits, proofAvatars } from "../data";

// Shared left-hand branded panel for the Sign Up / Log In pages.
export default function AuthAside() {
  return (
    <aside className="auth-aside">
      <Link to="/" className="brand auth-brand">
        <span className="brand-mark">
          <Sparkles size={18} />
        </span>
        luminous
      </Link>

      <div className="auth-aside-body">
        <h2>Smarter finance for a brighter future.</h2>
        <p>
          Join 38,000+ businesses managing their money smarter with Luminous —
          all your accounts, investments and insights in one place.
        </p>

        <ul className="auth-benefits">
          {authBenefits.map((b) => (
            <li key={b}>
              <span className="check">
                <Check size={13} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="auth-proof">
        <div className="avatars">
          {proofAvatars.map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" />
          ))}
        </div>
        <span>
          <b>38,182</b> people joined this year
        </span>
      </div>
    </aside>
  );
}
