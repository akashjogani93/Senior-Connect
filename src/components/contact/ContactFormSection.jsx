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

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill required fields!");
      return;
    }

    console.log("Form Submitted:", formData);

    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="contact-form-section py-5">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">Send Us a Message</h2>
            <p className="text-muted">
              Have questions or need assistance? Fill out the form and our team
              will get back to you as soon as possible.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-6">
            <div className="form-card">

              {success && (
                <div className="alert alert-success">
                  Message sent successfully!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  className="form-control mb-3"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  className="form-control mb-3"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-control mb-3"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-control mb-3"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message *"
                  className="form-control mb-3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

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