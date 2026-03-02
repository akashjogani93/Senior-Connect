import '../../assets/css/contact.css';

export default function ContactInfoSection() {
  const info = [
    {
      icon: "📍",
      title: "Our Address",
      value: "Bangalore, Karnataka, India"
    },
    {
      icon: "📞",
      title: "Phone Number",
      value: "+91 98765 43210"
    },
    {
      icon: "✉️",
      title: "Email Address",
      value: "support@yourapp.com"
    },
    {
      icon: "🕒",
      title: "Working Hours",
      value: "Mon – Sat : 9:00 AM – 7:00 PM"
    }
  ];

  return (
    <section className="contact-info py-5">
      <div className="container text-center">

        <h2 className="fw-bold mb-4 animate-fade">Get In Touch</h2>
        <p className="text-muted mb-5 animate-fade">
          Feel free to reach out to us using any of the options below.
        </p>

        <div className="row g-4">
          {info.map((item, i) => (
            <div key={i} className="col-md-3 col-6">
              <div className="info-card animate-up">
                <div className="info-icon">{item.icon}</div>
                <h5 className="fw-semibold mt-3">{item.title}</h5>
                <p className="text-muted small">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}