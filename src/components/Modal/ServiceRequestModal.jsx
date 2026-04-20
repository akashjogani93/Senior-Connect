import { useState } from "react";
import toast from "react-hot-toast";
import { createFormData } from "../../utils/formData";
import { useServiceRequestStore } from "../../store/serviceStore";

export default function ServiceRequestModal({ provider_id, service_type, onClose }) {

    const {createUpdateServiceRequest}=useServiceRequestStore();

    const user = JSON.parse(localStorage.getItem("user")) || {};

    const [form, setForm] = useState({
        request_title: "",
        service_description: "",
        preferred_date: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {

        if (!form.request_title || !form.service_description) {
            toast.error("All fields are required");
            return;
        }

        try {
            const payload = {
                ...form,
                user_id: user?.user_id,
                provider_id: provider_id,
                service_type: service_type
            };

            const formData = createFormData(payload);

            await createUpdateServiceRequest(formData);

            toast.success("Request sent successfully");

            onClose();

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                <div className="modal-header">
                    <h3>Send Service Request</h3>
                    <button className="modal-close" onClick={onClose}>✖</button>
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="request_title"
                        placeholder="Request Title"
                        value={form.request_title}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <textarea
                        name="service_description"
                        placeholder="Describe your need..."
                        value={form.service_description}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="date"
                        name="preferred_date"
                        value={form.preferred_date}
                        onChange={handleChange}
                    />
                </div>

                <div className="modal-actions">
                    <button className="btn green" onClick={handleSubmit}>
                        Send Request
                    </button>

                    <button className="btn red" onClick={onClose}>
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
}