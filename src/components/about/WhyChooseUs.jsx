import '../../assets/css/about.css';

export default function WhyChooseUs() {
  const reasons = [
    { icon: "🔒", title: "Verified Providers", desc: "Every hospital and caretaker is verified for authenticity and trust." },
    { icon: "⚡", title: "Instant Connect", desc: "Reach providers instantly via call or message with one click." },
    { icon: "📍", title: "Location-Based Search", desc: "Find the right support near your area without any complexity." },
    { icon: "🤝", title: "Trusted by Families", desc: "Thousands of families rely on our platform for safe help." },
    { icon: "💬", title: "24/7 Support", desc: "Get assistance anytime through our continuous support system." },
    { icon: "💙", title: "User-Friendly Experience", desc: "A clean and simple platform designed for everyone." }
  ];

  return (
    <section className="why-section py-5">
      <div className="container text-center">

        <h2 className="fw-bold mb-4 animate-fade">Why Choose Us</h2>
        <p className="text-muted mb-5 px-3 animate-fade">
          We bring simplicity, safety, and trust to healthcare and support services — 
          making it easier for families to get reliable help.
        </p>

        <div className="row g-4">
          {reasons.map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="why-card animate-up">
                <div className="why-icon">{item.icon}</div>
                <h5 className="fw-semibold mt-3">{item.title}</h5>
                <p className="text-muted px-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}