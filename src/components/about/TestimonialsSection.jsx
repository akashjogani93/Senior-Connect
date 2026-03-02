import '../../assets/css/about.css';

import user1 from '../../assets/uploads/member1.png';
import user2 from '../../assets/uploads/member2.png';
import user3 from '../../assets/uploads/member3.png';


export default function TestimonialsSection() {
  const reviews = [
    {
      img: user1,
      name: "Anjali Patel",
      text: "This platform helped me find a caretaker for my grandmother within minutes. Very reliable and smooth experience!",
      rating: 5
    },
    {
      img: user2,
      name: "Rohit Sharma",
      text: "Great service! The hospital list was accurate and helped us quickly connect during an emergency.",
      rating: 4
    },
    {
      img: user3,
      name: "Meena Gupta",
      text: "I love how simple and user-friendly the platform is. Trusted and verified providers really gave us peace of mind.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section py-5">
      <div className="container text-center">

        <h2 className="fw-bold mb-4 animate-fade">What People Say</h2>
        <p className="text-muted mb-5">
          Thousands of families trust us every day for healthcare and support services.
        </p>

        <div className="row g-4">
          {reviews.map((review, i) => (
            <div key={i} className="col-md-4">
              <div className="testimonial-card animate-up">

                {/* User Image */}
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="testimonial-img"
                />

                {/* Review */}
                <p className="testimonial-text">“{review.text}”</p>

                {/* Name */}
                <h6 className="fw-semibold mt-2">{review.name}</h6>

                {/* Stars */}
                <div className="testimonial-stars">
                  {"⭐".repeat(review.rating)}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}