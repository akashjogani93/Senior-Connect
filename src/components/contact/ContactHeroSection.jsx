import '../../assets/css/contact.css';
import contactBg from '../../assets/uploads/contact.png';
export default function ContactHeroSection() {
  return (
    <section
      className="contact-hero d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(${contactBg})`
      }}
    >
      <div className="container text-white">
        <h1 className="display-4 fw-bold animate-fade">
          Contact Us
        </h1>

        <p className="lead mt-3 animate-up">
          We are here to assist you with any questions, support, or service inquiries.
        </p>
      </div>
    </section>
  );
}