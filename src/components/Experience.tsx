import { returnPoints } from "../data";
import { useReveal } from "../hooks";

const EXP_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop";

export default function Experience() {
  const ref = useReveal();

  return (
    <section className="section experience" id="experience">
      <div className="container exp-grid reveal" ref={ref}>
        {/* Media card with real image + floating badges */}
        <div className="exp-media">
          <img src={EXP_IMG} alt="Finance analytics dashboard" loading="lazy" />
          <div className="exp-badge">
            <span className="dot" />
            120+ Trusted Clients
          </div>
          <div className="exp-note">Your money, working harder</div>
        </div>

        {/* Text + checklist */}
        <div>
          <span className="eyebrow">Experience that grows</span>
          <h2 className="section-title">
            Maximize your returns with a reserve account that generates
          </h2>
          <p className="section-sub" style={{ marginTop: 14 }}>
            Reserve business is a fintech technology platform focused on helping
            businesses unlock new revenue streams and streamline operations.
          </p>

          <ul className="exp-list">
            {returnPoints.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.text}>
                  <span className="li-icon">
                    <Icon size={18} />
                  </span>
                  {p.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
