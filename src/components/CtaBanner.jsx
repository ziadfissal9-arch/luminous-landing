import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="container" style={{ paddingBottom: 20 }}>
      <div className="cta-banner">
        <div>
          <h2>Ready to level up your payment process?</h2>
          <p>
            Support small businesses with simple invoicing, powerful payment
            tools, and real-time insights to keep growing.
          </p>
        </div>
        <a href="#pricing" className="btn btn-orange">
          Get Started
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
