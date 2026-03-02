import '../../assets/css/home.css'

export default function EmergencySection() {
  return (
    <section className="emergency py-5 bg-light">
      <div className="container">
        <div className="emergency-box p-5 row align-items-center g-4">
          <div className="col-md-7">
            <h3 className="text-danger fw-bold fs-2">
              ✳ EMERGENCY HELPLINE
            </h3>
            <p className="mb-0 text-muted">
              If you are in immediate danger or need urgent medical assistance, 
              please call our 24/7 priority line immediately.
            </p>
          </div>
          <div className="col-md-5 text-md-end">
            <a href="tel:1800SENIOR" className="btn btn-danger btn-lg rounded-pill px-5 py-3 fs-4 fw-bold">
              📞 1-800-SENIOR
            </a>
            <p className="small text-muted mt-2 mb-0">Available 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </div>
    </section>
  )
}