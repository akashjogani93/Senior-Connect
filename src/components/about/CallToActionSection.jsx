import '../../assets/css/about.css';

export default function CallToActionSection() {
  return (
    <section className="cta-section text-center py-5">
      <div className="container">

        <h2 className="fw-bold text-white animate-fade">
          Need Healthcare or Support Services?
        </h2>

        <p className="text-white-50 mt-3 mb-4 animate-up">
          We help you connect with trusted and verified providers instantly.
        </p>

        <a href="/contact" className="btn btn-light btn-lg px-4 py-2 fw-semibold cta-btn">
          Contact Us
        </a>

      </div>
    </section>
  );
}