import '../../assets/css/about.css';

export default function OurMissionVision() {
  const items = [
    {
      icon: "🎯",
      title: "Our Mission",
      desc: "To make healthcare and support services easily accessible, trusted, and available for everyone in need."
    },
    {
      icon: "👁️",
      title: "Our Vision",
      desc: "To build a caring ecosystem where families can instantly find verified healthcare providers and reliable assistance."
    },
    {
      icon: "⭐",
      title: "Our Core Values",
      desc: "Trust, reliability, transparency, and user-first experience — the foundation of our platform."
    }
  ];

  return (
    <section className="mission-section py-5">
      <div className="container text-center">
        
        <h2 className="fw-bold mb-4 animate-fade">Our Mission & Vision</h2>
        <p className="text-muted mb-5 px-3 animate-fade">
          We are dedicated to creating a platform that empowers people with the right support 
          at the right time through verified services and a trusted digital ecosystem.
        </p>

        <div className="row g-4">
          {items.map((item, i) => (
            <div key={i} className="col-md-4">
              <div className="mission-card animate-up">
                <div className="mission-icon">{item.icon}</div>
                <h4 className="fw-semibold mt-3 mb-2">{item.title}</h4>
                <p className="text-muted px-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}