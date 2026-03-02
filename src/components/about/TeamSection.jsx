import '../../assets/css/about.css';
import member1 from '../../assets/uploads/member1.png';
import member2 from '../../assets/uploads/member2.png';
import member3 from '../../assets/uploads/member3.png';

export default function TeamSection() {
  const team = [
    {
      img: member1,
      name: "Dr. Rahul Sharma",
      role: "Medical Advisor"
    },
    {
      img: member2,
      name: "Prashant Mehta",
      role: "Operations Head"
    },
    {
      img: member3,
      name: "Amit Verma",
      role: "Founder & CEO"
    }
  ];

  return (
    <section className="team-section py-5">
      <div className="container text-center">

        <h2 className="fw-bold mb-4 animate-fade">Meet Our Team</h2>
        <p className="text-muted mb-5">
          A dedicated team working to make healthcare access simple and reliable.
        </p>

        <div className="row g-4">
          {team.map((member, i) => (
            <div key={i} className="col-md-4">
              <div className="team-card animate-up">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="img-fluid team-img"
                />
                <h5 className="mt-3 fw-semibold">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}