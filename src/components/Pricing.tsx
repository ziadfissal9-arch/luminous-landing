import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { plans } from "../data";
import { useReveal } from "../hooks";

export default function Pricing() {
  const ref = useReveal();

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title">Choose the Plan That Fits Your Needs</h2>
          <p className="section-sub">
            All billing is transparent, no surprise charges. Starting at ready
            to scale, we have a plan for you.
          </p>
        </div>

        <div className="pricing-grid reveal" ref={ref}>
          {plans.map((p) => (
            <div className={`plan ${p.featured ? "featured" : ""}`} key={p.name}>
              <div className="plan-name">{p.name}</div>
              <div className="plan-desc">{p.tagline}</div>
              <div className="plan-price">
                ${p.price}
                <span> /month</span>
              </div>

              <Link
                to="/signup"
                className={`btn btn-block ${p.featured ? "btn-white" : "btn-dark"}`}
              >
                Get Started
              </Link>

              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="check">
                      <Check size={13} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
