import '../../assets/css/home.css'
import hospitalsupport from '../../assets/uploads/hospital.png'
import caretaker from '../../assets/uploads/caretaker.png'
import medicine from '../../assets/uploads/medicine.png'
import valuntary from '../../assets/uploads/valuntary.png'

const services = [
  { 
    title: "Hospital Support", 
    desc: "Find nearby clinics, specialists, and transport services...", 
    img: hospitalsupport, 
    btn: "Find Hospitals" 
  },
  { 
    title: "Caretaker Services", 
    desc: "Trusted assistance for daily living, housekeeping...", 
    img: caretaker, 
    btn: "Find Caretakers" 
  },
  { 
    title: "Medicine Delivery", 
    desc: "Order prescriptions from local pharmacies...", 
    img: medicine, 
    btn: "Order Medicine" 
  },
  { 
    title: "Volunteer Help", 
    desc: "Connect with friendly community members...", 
    img: valuntary, 
    btn: "Find Volunteers" 
  }
]

export default function CoreServices() {
  return (
    <section className="core-Section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Core Services</h2>
          <p className="lead text-muted">
            Everything you need to live comfortably and safely, all in one place.
          </p>
        </div>

        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="service-card h-100 text-center shadow-sm">
                <img 
                  src={s.img} 
                  className="card-img-top" 
                  style={{ height: "210px", objectFit: "cover" }} 
                  alt={s.title} 
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-semibold mb-3">{s.title}</h5>
                  <p className="card-text text-muted small mb-4">{s.desc}</p>
                  <button className="btn btn-outline-primary rounded-pill px-4 py-2">
                    {s.btn} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}