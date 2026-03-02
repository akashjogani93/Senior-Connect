import '../../assets/css/about.css';
import aboutImg from '../../assets/uploads/care.png';
export default function WhoWeAre() {
  return (
    <section className="who-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="who-image animate-left">
              <img 
                src={aboutImg} 
                alt="Who We Are" 
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6">
            <div className="who-content animate-right">
              <h2 className="fw-bold mb-3">Who We Are</h2>

              <p className="text-muted">
                We are a platform dedicated to connecting families with trusted healthcare 
                and support services. Our goal is to make it easy, fast, and secure for 
                people to find verified hospitals, caretakers, and emergency assistance.
              </p>

              <p className="text-muted">
                With a strong focus on reliability, transparency, and user trust, 
                we aim to build a caring ecosystem where help is always within reach. 
              </p>

              <ul className="list-unstyled mt-3">
                <li>✔ Verified Healthcare Providers</li>
                <li>✔ Easy & Safe Communication</li>
                <li>✔ Trusted by Thousands of Families</li>
                <li>✔ 24×7 Availability</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}