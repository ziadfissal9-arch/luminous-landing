import { Star } from "lucide-react";
import { testimonials } from "../data";
import { useReveal } from "../hooks";

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="testimonials-head">
          <div>
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">Customer Testimonials</h2>
          </div>
        </div>

        <div className="testimonials-grid reveal" ref={ref}>
          {testimonials.map((t) => (
            <div className="testi" key={t.name}>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-person">
                <img src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
