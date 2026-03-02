import '../../assets/css/home.css';
import bgImage from '../../assets/uploads/howitwork.png'; // <-- your bg image

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Search Services",
      desc: "Enter your city and explore verified hospitals, caretakers, and emergency help near you.",
      icon: "🔍"
    },
    {
      num: "02",
      title: "Connect Instantly",
      desc: "Call or chat with service providers directly in one click through our safe platform.",
      icon: "📞"
    },
    {
      num: "03",
      title: "Receive Trusted Care",
      desc: "Get reliable and timely support from trusted community professionals.",
      icon: "🤝"
    }
  ];

  return (
    <section
      className="how-section py-5"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${bgImage})`
      }}
    >
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5 text-white animate-fade">
          How It Works
        </h2>

        <div className="row g-4">
          {steps.map((step, i) => (
            <div key={i} className="col-md-4">
              <div className="how-card animate-up">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.num}</h3>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}