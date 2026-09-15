import { stats } from "../data";
import { useCountUp, useReveal } from "../hooks";
import type { Stat } from "../types";

function StatCard({ stat }: { stat: Stat }) {
  const [ref, display] = useCountUp(stat.value);
  return (
    <div className="stat" ref={ref}>
      <div className="stat-num">{display}</div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-sub">{stat.sub}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useReveal();

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-head">
          <h2 className="section-title">
            Collaborate in real time with on demand file sharing
          </h2>
          <p className="section-sub">
            Collaborate instantly with on-demand file sharing and real-time
            communication built for modern finance teams.
          </p>
        </div>

        <div className="stats-grid reveal" ref={ref}>
          {stats.map((s) => (
            <StatCard stat={s} key={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
