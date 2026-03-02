import '../../assets/css/home.css';
import aboutImage from '../../assets/uploads/howitwork.png';// change filename

export default function AboutUs() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Image Side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-image animate-left">
              <img src={aboutImage} alt="About Us" className="img-fluid rounded-4 shadow" />
            </div>
          </div>

          {/* Content Side */}
          <div className="col-md-6">
            <div className="about-content animate-right">
              <h2 className="fw-bold mb-4">About Us</h2>

              <p className="text-muted">
                We are committed to connecting families with trusted healthcare and support services.
                Our platform makes it simple, fast, and safe to find verified hospitals,
                caretakers, and emergency assistance whenever you need it.
              </p>

              <p className="text-muted">
                Our mission is to build a caring community where help is just one click away.
                We focus on reliability, transparency, and user trust.
              </p>

              <button className="btn btn-primary px-4 py-2 mt-3">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}