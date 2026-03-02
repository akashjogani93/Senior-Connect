import { useState } from "react";
import AuthInput from "./AuthInput";
import "../../assets/css/auth.css";
import registerBg from "../../assets/uploads/contact.png"; // change to your BG

export default function RegisterPage() {
  const [role, setRole] = useState("senior"); 
  const [category, setCategory] = useState("");
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    pincode: "",
  });

  const categories = [
    { id: "hospital", label: "Hospital" },
    { id: "caretaker", label: "Caretaker" },
    { id: "medicine", label: "Medical Store" },
    { id: "volunteer", label: "Volunteer" },
  ];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="auth-container"
      style={{ backgroundImage: `url(${registerBg})` }}
    >
      <div className="auth-card" style={{ maxWidth: "420px" }}>

        {/* Title */}
        <h2 className="text-center fw-bold mb-1">Create an Account</h2>
        <p className="text-center text-muted mb-4">
          Join Senior Connect to explore services
        </p>

        {/* Role Selector */}
        <div className="d-flex gap-2 mb-3">
          <div
            className={`role-box ${role === "senior" ? "active" : ""}`}
            onClick={() => setRole("senior")}
          >
            Senior Citizen
          </div>

          <div
            className={`role-box ${role === "provider" ? "active" : ""}`}
            onClick={() => setRole("provider")}
          >
            Service Provider
          </div>
        </div>

        {/* Categories (only when provider) */}
        {role === "provider" && (
          <div className="category-container mb-3">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`category-pill ${
                  category === cat.id ? "active" : ""
                }`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </div>
            ))}
          </div>
        )}

        {/* Form Inputs */}
        <AuthInput
          type="text"
          placeholder="Full Name"
          value={data.fullname}
          onChange={handleChange}
          name="fullname"
        />

        <AuthInput
          type="email"
          placeholder="Email Address"
          value={data.email}
          onChange={handleChange}
          name="email"
        />

        <AuthInput
          type="text"
          placeholder="Phone Number"
          value={data.phone}
          onChange={handleChange}
          name="phone"
        />

        <AuthInput
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          name="password"
        />

        <AuthInput
          type="text"
          placeholder="City"
          value={data.city}
          onChange={handleChange}
          name="city"
        />

        <AuthInput
          type="text"
          placeholder="Pincode"
          value={data.pincode}
          onChange={handleChange}
          name="pincode"
        />

        {/* Terms */}
        <p className="text-muted small mt-2">
          By creating an account, you agree to our{" "}
          <span className="text-primary">Terms & Conditions</span>.
        </p>

        {/* Submit Button */}
        <button className="btn btn-primary w-100 mt-2">Create My Account</button>

        {/* Already have account */}
        <div className="text-center mt-3 small">
          Already have an account?{" "}
          <a href="/login" className="text-primary fw-semibold">
            Login
          </a>
        </div>

      </div>
    </div>
  );
}