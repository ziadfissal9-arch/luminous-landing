import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneMockup from "./PhoneMockup";
import { proofAvatars } from "../data";
import { useReveal } from "../hooks";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="hero" id="home">
      <div className="container hero-grid reveal" ref={ref}>
        {/* Left: phone visual */}
        <div className="hero-card hero-visual">
          <div className="float-card float-card-tl">
            <TrendingUp size={16} />
            <div>
              <b>+18.2%</b>
              <span>this month</span>
            </div>
          </div>
          <PhoneMockup />
        </div>

        {/* Right: value proposition */}
        <div className="hero-card hero-value">
          <div>
            <div className="hero-tag">Instant Value Proposition</div>
            <h1 className="hero-title">
              Smarter Finance
              <br />
              For A Brighter Future
            </h1>
            <p className="hero-desc">
              All your accounts, investments, and insights — connected and
              simplified in one powerful platform.
            </p>
          </div>

          <div>
            <div className="hero-cta-row">
              <Link to="/signup" className="btn btn-dark">
                Sign up for free
              </Link>
              <a
                href="#features"
                className="btn btn-icon btn-dark"
                aria-label="Learn more"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="hero-proof">
              <div className="avatars">
                {proofAvatars.map((src, i) => (
                  <img key={i} src={src} alt="" loading="lazy" />
                ))}
              </div>
              <div className="hero-proof-text">
                <b>38,182</b> Satisfied Users
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
