import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/profile.css";
import { createFormData } from "../../utils/formData";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";

function Profile() {
    const { register, loading } = useAuthStore();
    const user = JSON.parse(localStorage.getItem("user"));
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        pincode: "",
        business_type: "",
        description: "",
    });

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                phone: user.phone || "",
                email: user.email || "",
                address: user.address || "",
                city: user.city || "",
                pincode: user.pincode || "",
                business_type: user.business_type || "",
                description: user.description || "",
            });
        }
    }, []);

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^[0-9]{10}$/.test(form.phone)) {
            newErrors.phone = "Enter valid 10 digit phone";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Invalid email";
        }

        if (!form.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!form.pincode.trim()) {
            newErrors.pincode = "Pincode is required";
        } else if (!/^[0-9]{6}$/.test(form.pincode)) {
            newErrors.pincode = "Invalid pincode";
        }

        // provider only
        if (user?.role !== "senior") {
            if (!form.business_type.trim()) {
                newErrors.business_type = "Business type required";
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const payload = {
                user_id: user?.user_id,
                role: user?.role,

                name: form.name,
                phone: form.phone,
                email: form.email,
                address: form.address,
                city: form.city,
                pincode: form.pincode,
            };

            if (user?.role !== "senior") {
                payload.business_type = form.business_type;
                payload.description = form.description;
            }

            const formData = createFormData(payload);

            const res=await register(formData);
            console.log(res);
            if(res?.success)
            {   
                toast.success("Profile updated successfully 🎉");
            }else
            {
                toast.error(res?.message || "Something went wrong");
            }
            localStorage.setItem("user", JSON.stringify({ ...user, ...payload }));

            setEditMode(false);
        } catch (err) 
        {
            console.log(err);
        }
    };

    return (
        <div className="profile-page">
            <Navbar />

            <div className="container profile-container">
                <div className="profile-card">

                    {/* Header */}
                    <div className="profile-header">
                        <h3>My Profile</h3>

                        {!editMode && (
                            <button onClick={() => setEditMode(true)}>
                                Edit Profile
                            </button>
                        )}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                value={form.name}
                                disabled={!editMode}
                                className={errors.name ? "error-input" : ""}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>}
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                value={form.phone}
                                disabled={!editMode}
                                className={errors.phone ? "error-input" : ""}
                                onChange={(e) =>
                                    setForm({ ...form, phone: e.target.value })
                                }
                            />
                            {errors.phone && <p className="error-text">{errors.phone}</p>}
                        </div>

                        {/* Email (readonly) */}
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                value={form.email}
                                disabled
                            />
                        </div>

                        {/* Address */}
                        <div className="form-group">
                            <label>Address</label>
                            <textarea
                                value={form.address}
                                disabled={!editMode}
                                onChange={(e) =>
                                    setForm({ ...form, address: e.target.value })
                                }
                            />
                        </div>

                        {/* City + Pincode */}
                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    value={form.city}
                                    disabled={!editMode}
                                    className={errors.city ? "error-input" : ""}
                                    onChange={(e) =>
                                        setForm({ ...form, city: e.target.value })
                                    }
                                />
                                {errors.city && <p className="error-text">{errors.city}</p>}
                            </div>

                            <div className="form-group">
                                <label>Pincode</label>
                                <input
                                    type="text"
                                    value={form.pincode}
                                    disabled={!editMode}
                                    className={errors.pincode ? "error-input" : ""}
                                    onChange={(e) =>
                                        setForm({ ...form, pincode: e.target.value })
                                    }
                                />
                                {errors.pincode && <p className="error-text">{errors.pincode}</p>}
                            </div>
                        </div>

                        {/* NON-SENIOR ONLY */}
                        {user?.role !== "senior" && (
                            <>
                                <div className="form-group">
                                    <label>Business Type</label>
                                    <input
                                        type="text"
                                        value={form.business_type}
                                        disabled={!editMode}
                                        className={errors.business_type ? "error-input" : ""}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                business_type: e.target.value,
                                            })
                                        }
                                    />
                                    {errors.business_type && (
                                        <p className="error-text">{errors.business_type}</p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        value={form.description}
                                        disabled={!editMode}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                description: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </>
                        )}

                        {/* Buttons */}
                        {editMode && (
                            <div className="profile-actions">
                                <button type="submit" disabled={loading}>
                                    {loading ? "Saving..." : "Save"}
                                </button>

                                <button
                                    type="button"
                                    className="cancel"
                                    onClick={() => setEditMode(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Profile;