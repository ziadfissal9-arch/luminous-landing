import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Check,
  CheckCircle2,
} from "lucide-react";
import AuthAside from "../components/AuthAside";
import { GoogleIcon, AppleIcon } from "../components/BrandIcons";

// Password strength: 0-4 based on length + variety
function scorePassword(pw) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const STRENGTH = ["", "Weak", "Fair", "Good", "Strong"];

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [agree, setAgree] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const strength = scorePassword(form.password);

  const set = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: "" });
  };

  const validate = () => {
    const err = {};
    if (form.name.trim().length < 2) err.name = "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter a valid email address";
    if (form.password.length < 8)
      err.password = "Password must be at least 8 characters";
    if (!agree) err.agree = "You must accept the terms to continue";
    return err;
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) setDone(true);
  };

  if (done) {
    return (
      <div className="auth-page">
        <AuthAside />
        <main className="auth-main">
          <div className="auth-card auth-success">
            <div className="success-icon">
              <CheckCircle2 size={40} />
            </div>
            <h1>Welcome aboard, {form.name.split(" ")[0]}! 🎉</h1>
            <p className="auth-sub">
              Your account has been created successfully. Check{" "}
              <b>{form.email}</b> to verify your email and get started.
            </p>
            <Link to="/" className="btn btn-orange btn-block">
              Go to Dashboard
            </Link>
            <Link to="/login" className="auth-link-center">
              Back to Log In
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <AuthAside />

      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-head">
            <h1>Create your account</h1>
            <p className="auth-sub">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>

          <div className="social-auth">
            <button type="button" className="btn btn-light btn-block">
              <GoogleIcon size={18} /> Sign up with Google
            </button>
            <button type="button" className="btn btn-light btn-icon-only" aria-label="Sign up with Apple">
              <AppleIcon size={18} />
            </button>
          </div>

          <div className="auth-divider">
            <span>or sign up with email</span>
          </div>

          <form onSubmit={submit} noValidate>
            <div className="form-field">
              <label>Full name</label>
              <div className={`input ${errors.name ? "err" : ""}`}>
                <User size={18} />
                <input
                  type="text"
                  placeholder="Ziad Fissal"
                  value={form.name}
                  onChange={set("name")}
                />
              </div>
              {errors.name && <span className="field-err">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label>Email address</label>
              <div className={`input ${errors.email ? "err" : ""}`}>
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
              {errors.email && <span className="field-err">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label>Password</label>
              <div className={`input ${errors.password ? "err" : ""}`}>
                <Lock size={18} />
                <input
                  type={showPw ? "text" : "password"}
                  placeholder="At least 8 characters"
                  value={form.password}
                  onChange={set("password")}
                />
                <button
                  type="button"
                  className="pw-toggle"
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {form.password && (
                <div className="strength">
                  <div className="strength-bars">
                    {[1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className={`bar ${n <= strength ? `s${strength}` : ""}`}
                      />
                    ))}
                  </div>
                  <span className={`strength-label s${strength}`}>
                    {STRENGTH[strength]}
                  </span>
                </div>
              )}
              {errors.password && (
                <span className="field-err">{errors.password}</span>
              )}
            </div>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => {
                  setAgree(e.target.checked);
                  if (errors.agree) setErrors({ ...errors, agree: "" });
                }}
              />
              <span className="checkbox-box">
                <Check size={12} />
              </span>
              <span>
                I agree to the <a href="#terms">Terms</a> and{" "}
                <a href="#privacy">Privacy Policy</a>
              </span>
            </label>
            {errors.agree && <span className="field-err">{errors.agree}</span>}

            <button type="submit" className="btn btn-orange btn-block btn-lg">
              Create account
            </button>
          </form>

          <p className="auth-alt">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
