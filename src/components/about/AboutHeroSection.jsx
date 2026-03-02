import '../../assets/css/about.css';
import heroBg from '../../assets/uploads/hospital.png';

export default function AboutHeroSection() {
  return (
    <section
      className="about-hero d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${heroBg})`
      }}
    >
      <div className="container text-white">
        <h1 className="display-4 fw-bold animate-fade">
          About Us
        </h1>
        <p className="lead mt-3 animate-up">
          Connecting families with trusted healthcare and support services —
          simple, safe, and reliable.
        </p>
      </div>
    </section>
  );
}