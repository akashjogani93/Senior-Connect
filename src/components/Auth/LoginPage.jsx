import { useState } from "react";
import AuthInput from "./AuthInput";
import "../../assets/css/auth.css";
import loginBg from "../../assets/uploads/contact.png";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { validate } from "../../utils/validation";
import toast from "react-hot-toast";
import { createFormData } from "../../utils/formData";

export default function LoginPage() {
    const navigate = useNavigate();
    const { login, loading } = useAuthStore();
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

        setErrors({ ...errors, [e.target.name]: "" });
    };

    const loginRules = {
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Valid email is required",
        },
        password: {
            required: true,
            // minLength: 15,
        },
    };
    const handleSubmit = async () => {
        try {
            if (loading) return;
            // ------------------ Validate ------------------
            const validationErrors = validate(data, loginRules);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);

                // show first error in toast
                const firstError = Object.values(validationErrors)[0];
                toast.error(firstError);

                return;
            }

            // ------------------ Payload ------------------
            const payload = {
                email: data.email.trim(),
                password: data.password,
            };
            const formData = createFormData(payload);

            // ------------------ API ------------------
            const res = await login(formData);
            console.log("Login Response:", res);
            toast.success("Login Successful 🎉");
            // ------------------ Redirect ------------------
            const role = res?.user?.role;

            // setTimeout(() => {
            //     if (role === "provider") {
            //         navigate("/provider/dashboard");
            //     } else {
            //         navigate("/senior/dashboard");
            //     }
            // }, 1000);

        } catch (err) {
            console.error("Login Error:", err); // Debugging log
            toast.error(err?.response?.data?.message || "Invalid credentials ❌");
        }
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
                <div>
                    <AuthInput
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={data.email}
                        onChange={handleChange}
                        className={errors.email ? "error-input" : ""}
                    />
                    {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                    )}
                </div>
                <div>
                    <AuthInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={handleChange}
                        className={errors.password ? "error-input" : ""}
                    />
                    {errors.password && (
                        <small className="text-danger">{errors.password}</small>
                    )}
                </div>
                <button
                    type="button"
                    className="btn btn-primary w-100 mt-3"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <div className="text-center mt-3">
                    <span className="text-primary small" style={{ cursor: "pointer" }} onClick={() => navigate("/forgot-password")}>
                        Forgot Password?
                    </span>
                </div>

                <div className="text-center mt-2 small">
                    Don’t have an account?{" "}
                    <span
                        className="text-primary fw-semibold"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </span>
                </div>

            </div>
        </div>
    );
}