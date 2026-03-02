import { useState } from "react";
import AuthInput from "./AuthInput";
import "../../assets/css/auth.css";
import loginBg from "../../assets/uploads/contact.png"; // change to your login bg

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div className="auth-card">

        <h2 className="text-center fw-bold mb-3">Welcome Back</h2>
        <p className="text-center text-muted mb-4">
          Login to continue with Senior Connect
        </p>

        <AuthInput
          type="email"
          placeholder="Email Address"
          value={data.email}
          onChange={handleChange}
        />

        <AuthInput
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100 mt-2">Login</button>

        <div className="text-center mt-3">
          <a href="#" className="text-primary small">
            Forgot Password?
          </a>
        </div>

        <div className="text-center mt-2 small">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary fw-semibold">
            Register
          </a>
        </div>

      </div>
    </div>
  );
}