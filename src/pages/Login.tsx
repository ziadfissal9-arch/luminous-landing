import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthAside from "../components/AuthAside";
import { GoogleIcon, AppleIcon } from "../components/BrandIcons";

interface FormState {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function Login() {
  const [form, setForm] = useState<FormState>({ email: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const set = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: "" });
  };

  const validate = (): FormErrors => {
    const err: FormErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter a valid email address";
    if (form.password.length < 1) err.password = "Password is required";
    return err;
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      // Portfolio demo: no backend, no real session — just route home.
      navigate("/");
    }
  };

  return (
    <div className="auth-page">
      <AuthAside />

      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-head">
            <h1>Welcome back</h1>
            <p className="auth-sub">
              Log in to your account to access your dashboard.
            </p>
          </div>

          <div className="social-auth">
            <button type="button" className="btn btn-light btn-block">
              <GoogleIcon size={18} /> Log in with Google
            </button>
            <button type="button" className="btn btn-light btn-icon-only" aria-label="Log in with Apple">
              <AppleIcon size={18} />
            </button>
          </div>

          <div className="auth-divider">
            <span>or log in with email</span>
          </div>

          <form onSubmit={submit} noValidate>
            <div className="form-field">
              <label htmlFor="login-email">Email address</label>
              <div className={`input ${errors.email ? "err" : ""}`}>
                <Mail size={18} />
                <input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
              {errors.email && <span className="field-err">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="login-password">
                Password
                <a href="#forgot" className="forgot-link">
                  Forgot?
                </a>
              </label>
              <div className={`input ${errors.password ? "err" : ""}`}>
                <Lock size={18} />
                <input
                  id="login-password"
                  type={showPw ? "text" : "password"}
                  placeholder="Enter your password"
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
              {errors.password && (
                <span className="field-err">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="btn btn-lime btn-block btn-lg">
              Log in
            </button>
          </form>

          <p className="auth-alt">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
