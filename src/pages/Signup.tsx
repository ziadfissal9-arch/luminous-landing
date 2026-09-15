import { useState, type ChangeEvent, type FormEvent } from "react";
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
import { scorePassword } from "../hooks";

const STRENGTH = ["", "Weak", "Fair", "Good", "Strong"];

interface FormState {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  agree?: string;
}

export default function Signup() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", password: "" });
  const [agree, setAgree] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [done, setDone] = useState(false);

  const strength = scorePassword(form.password);

  const set = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: "" });
  };

  const validate = (): FormErrors => {
    const err: FormErrors = {};
    if (form.name.trim().length < 2) err.name = "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter a valid email address";
    if (form.password.length < 8)
      err.password = "Password must be at least 8 characters";
    if (!agree) err.agree = "You must accept the terms to continue";
    return err;
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
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
            <h1>Welcome aboard, {form.name.split(" ")[0]}!</h1>
            <p className="auth-sub">
              Your account details for <b>{form.email}</b> look good.
            </p>
            <Link to="/" className="btn btn-lime btn-block">
              Go to Dashboard
            </Link>
            <Link to="/login" className="auth-link-center">
              Back to Log In
            </Link>
            <p className="demo-note">
              This is a portfolio demo — no account was created and no email
              was sent.
            </p>
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
              <label htmlFor="signup-name">Full name</label>
              <div className={`input ${errors.name ? "err" : ""}`}>
                <User size={18} />
                <input
                  id="signup-name"
                  type="text"
                  placeholder="Ziad Fissal"
                  value={form.name}
                  onChange={set("name")}
                />
              </div>
              {errors.name && <span className="field-err">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="signup-email">Email address</label>
              <div className={`input ${errors.email ? "err" : ""}`}>
                <Mail size={18} />
                <input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
              {errors.email && <span className="field-err">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="signup-password">Password</label>
              <div className={`input ${errors.password ? "err" : ""}`}>
                <Lock size={18} />
                <input
                  id="signup-password"
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

            <button type="submit" className="btn btn-lime btn-block btn-lg">
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
