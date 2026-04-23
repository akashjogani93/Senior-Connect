import { useState } from "react";
import '../../assets/css/contact.css';

export default function ContactFormSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // ✅ Validation Function
  const validateForm = () => {
    let newErrors = {};

    // Name (only text, min 3)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Only letters allowed";
    } else if (formData.name.length < 3) {
      newErrors.name = "Minimum 3 characters required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone (only numbers, 10 digit optional)
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Minimum 10 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Input control (live restriction)
    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) return;
    if (name === "phone" && !/^[0-9]*$/.test(value)) return;

    setFormData({
      ...formData,
      [name]: value
    });

    // remove error on typing
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form Submitted:", formData);

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

    setErrors({});
  };

  return (
    <section className="contact-form-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold mb-3">Send Us a Message</h2>
            <p className="text-muted">
              Have questions? Fill the form and we’ll respond quickly.
            </p>
          </div>

          {/* RIGHT */}
          <div className="col-md-6">
            <div className="form-card">

              {success && (
                <div className="alert alert-success">
                  ✅ Your details have been sent successfully!  
                  <br />
                  📩 Our team will contact you soon via email.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  className={`form-control mb-2 ${errors.name && "is-invalid"}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="text-danger mb-2">{errors.name}</div>}

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  className={`form-control mb-2 ${errors.email && "is-invalid"}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="text-danger mb-2">{errors.email}</div>}

                {/* PHONE */}
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className={`form-control mb-2 ${errors.phone && "is-invalid"}`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="text-danger mb-2">{errors.phone}</div>}

                {/* SUBJECT */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-control mb-3"
                  value={formData.subject}
                  onChange={handleChange}
                />

                {/* MESSAGE */}
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message *"
                  className={`form-control mb-2 ${errors.message && "is-invalid"}`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="text-danger mb-2">{errors.message}</div>}

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}