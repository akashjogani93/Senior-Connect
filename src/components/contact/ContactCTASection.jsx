import '../../assets/css/contact.css';

export default function ContactCTASection() {
  return (
    <section className="contact-cta-section text-center py-5">
      <div className="container">

        <h2 className="fw-bold text-white animate-fade">
          Need Immediate Assistance?
        </h2>

        <p className="text-white-50 mt-3 mb-4 animate-up">
          Our team is ready to help you anytime. Reach out now for quick and reliable support.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          
          <a href="tel:+919876543210" className="btn btn-light px-4 py-2 fw-semibold cta-btn">
            📞 Call Now
          </a>

          <a href="mailto:support@yourapp.com" className="btn btn-outline-light px-4 py-2 fw-semibold cta-btn-outline">
            ✉️ Email Us
          </a>

        </div>

      </div>
    </section>
  );
}