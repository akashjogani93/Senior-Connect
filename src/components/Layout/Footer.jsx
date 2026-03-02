export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <span className="fw-bold fs-3">Senior Connect</span>
            </div>
            <p className="text-light-50">Improving quality of life through technology and community support.</p>
          </div>

          <div className="col-lg-4 col-md-4">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light-50 text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Login</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4">
            <h6 className="text-white mb-3">Contact Info</h6>
            <p className="mb-1 text-light-50">123 Care Lane, Suite 100<br />Wellness City, ST 12345</p>
            <p className="mb-1 text-light-50">(555) 123-4567</p>
            <p className="text-light-50">support@seniorconnect.com</p>
          </div>

          {/* <div className="col-lg-3 col-md-4">
            <h6 className="text-white mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light-50 text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Terms of Service</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Accessibility</a></li>
            </ul>
          </div> */}
        </div>

        <hr className="my-5 border-secondary" />
        <div className="text-center text-light-50 small">
          © 2023 Senior Connect Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}