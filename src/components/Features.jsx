import { features } from "../data";
import { useReveal } from "../hooks";

export default function Features() {
  const ref = useReveal();

  return (
    <section className="section" id="features">
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2 className="section-title" style={{ maxWidth: 520 }}>
          Empowering people to take control of their finances
        </h2>

        <div className="features-grid reveal" ref={ref}>
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                className={`feature ${f.featured ? "featured" : ""}`}
                key={f.title}
              >
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <div className="feature-title">{f.title}</div>
                <p className="feature-desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
