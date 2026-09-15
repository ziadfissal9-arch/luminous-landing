import { logos } from "../data";

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container">
        <p className="trusted-label">
          Trusted by fast-growing teams around the world
        </p>
        <div className="trusted-row">
          {logos.map((name) => (
            <span className="logo-word" key={name}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
