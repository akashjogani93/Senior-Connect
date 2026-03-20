import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";
import toast from "react-hot-toast";
import { createFormData } from "../../utils/formData";
import { postRequest } from "../../api/services";
import { API } from "../../api/endpoints";
import { useAuthStore } from "../../store/authStore";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const { forgetpassword,changepassword,otpverification, loading } = useAuthStore();
    const [step, setStep] = useState(1);

    const [data, setData] = useState({
        phone: "",
        otp: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // ------------------ STEP 1: SEND OTP ------------------
    const handleSendOtp = async () => {
        try {
            if (!data.phone) {
                return toast.error("Phone is required");
            }
            const formData = createFormData({ phone: data.phone });
            await forgetpassword(formData);

            toast.success("OTP sent successfully 📩");
            setStep(2);

        } catch (err) {
            toast.error(err?.response?.data?.message || "Failed to send OTP");
        }
    };

    // ------------------ STEP 2: VERIFY OTP ------------------
    const handleVerifyOtp = async () => {
        try {
            if (!data.otp) {
                return toast.error("Enter OTP");
            }
            const formData = createFormData({
                phone: data.phone,
                otp: data.otp,
            });

            await otpverification(formData); 

            toast.success("OTP verified ✅");
            setStep(3);

        } catch (err) {
            toast.error(err?.response?.data?.message || "Invalid OTP ❌");
        }
    };

    // ------------------ STEP 3: RESET PASSWORD ------------------
    const handleResetPassword = async () => {
        try {
            if (!data.password || !data.confirmPassword) {
                return toast.error("Fill all fields");
            }

            if (data.password !== data.confirmPassword) {
                return toast.error("Passwords do not match");
            }
            const formData = createFormData({
                phone: data.phone,
                newPassword: data.password,
                confirmPassword: data.password,
            });
            await changepassword(formData);
            toast.success("Password updated successfully 🎉");

            setTimeout(() => {
                navigate("/login");
            }, 1000);

        } catch (err) {
            toast.error(err?.response?.data?.message || "Error resetting password");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">

                <h3 className="text-center mb-3">Forgot Password</h3>

                {/* STEP 1 */}
                {step === 1 && (
                    <>
                        <AuthInput
                            type="tel"
                            name="phone"
                            placeholder="Enter Phone Number"
                            value={data.phone}
                            onChange={handleChange}
                        />

                        <button
                            className="btn btn-primary w-100 mt-2"
                            onClick={handleSendOtp}
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send OTP"}
                        </button>
                    </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <>
                        <AuthInput
                            type="text"
                            name="otp"
                            placeholder="Enter OTP"
                            value={data.otp}
                            onChange={handleChange}
                        />

                        <button
                            className="btn btn-primary w-100 mt-2"
                            onClick={handleVerifyOtp}
                            disabled={loading}
                        >
                            {loading ? "Verifying..." : "Verify OTP"}
                        </button>
                    </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                    <>
                        <AuthInput
                            type="password"
                            name="password"
                            placeholder="New Password"
                            value={data.password}
                            onChange={handleChange}
                        />

                        <AuthInput
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={data.confirmPassword}
                            onChange={handleChange}
                        />

                        <button
                            className="btn btn-success w-100 mt-2"
                            onClick={handleResetPassword}
                            disabled={loading}
                        >
                            {loading ? "Updating..." : "Update Password"}
                        </button>
                    </>
                )}

                {/* Back to login */}
                <div className="text-center mt-3">
                    <span
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/login")}
                    >
                        Back to Login
                    </span>
                </div>

            </div>
        </div>
    );
}