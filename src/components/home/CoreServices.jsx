import '../../assets/css/home.css'
import hospitalsupport from '../../assets/uploads/hospital.png'
import caretaker from '../../assets/uploads/caretaker.png'
import medicine from '../../assets/uploads/medicine.png'
import valuntary from '../../assets/uploads/valuntary.png'
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Hospital Support",
    desc: "Find nearby clinics, specialists, and transport services...",
    img: hospitalsupport,
    btn: "hospital",
    category: "hospital"
  },
  {
    title: "Caretaker Services",
    desc: "Trusted assistance for daily living, housekeeping...",
    img: caretaker,
    btn: "caretaker",
    category: "caretaker"
  },
  {
    title: "Medicine Delivery",
    desc: "Order prescriptions from local pharmacies...",
    img: medicine,
    btn: "medical_store",
    category: "medical_store"
  },
  {
    title: "Volunteer Help",
    desc: "Connect with friendly community members...",
    img: valuntary,
    btn: "volunteer",
    category: "volunteer"
  }
]

export default function CoreServices() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate("/services", {
      state: {
        category: category
      }
    });
  };
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
                  <button
                    onClick={() => handleClick(s.category)}
                    style={{
                      border: "2px solid #0d6efd",
                      color: "#0d6efd",
                      background: "transparent",
                      padding: "8px 20px",
                      borderRadius: "50px",
                      fontWeight: "500",
                      opacity: 1,
                      visibility: "visible",
                      display: "inline-block",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#0d6efd";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#0d6efd";
                    }}
                  >
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