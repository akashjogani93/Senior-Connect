import { useEffect, useState } from "react";
import '../../assets/css/about.css';

export default function StatsSection() {
  const stats = [
    { icon: "👨‍👩‍👧‍👦", label: "Happy Users", value: 5000 },
    { icon: "🏥", label: "Hospitals Listed", value: 120 },
    { icon: "🧑‍⚕️", label: "Verified Caretakers", value: 450 },
    { icon: "⭐", label: "Satisfaction Rate", value: 98 }
  ];

  const [count, setCount] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1500; // animation speed
    const startTime = performance.now();

    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);

      setCount(stats.map(s => Math.floor(s.value * progress)));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="stats-section py-5">
      <div className="container text-center">
        
        <h2 className="fw-bold mb-4 animate-fade">Our Achievements</h2>
        <p className="text-muted mb-5 animate-fade">
          Trusted by thousands of families and verified professionals nationwide.
        </p>

        <div className="row g-4">
          {stats.map((s, i) => (
            <div className="col-md-3 col-6" key={i}>
              <div className="stat-card animate-up">
                <div className="stat-icon">{s.icon}</div>
                <h3 className="stat-number">
                  {count[i]}{s.label === "Satisfaction Rate" ? "%" : "+"}
                </h3>
                <p className="stat-label">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}