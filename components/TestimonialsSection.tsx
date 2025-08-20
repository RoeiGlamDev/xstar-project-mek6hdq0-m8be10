import React from 'react';
import './TestimonialsSection.css'; // Assuming you have a CSS file for styling

const testimonials = [
  {
    id: 1,
    quote: "Absolutely love these products! They make me feel so luxurious.",
    name: "Sophia L.",
    position: "Beauty Influencer",
  },
  {
    id: 2,
    quote: "The quality is unmatched. A must-have for anyone who loves cosmetics.",
    name: "Emily R.",
    position: "Makeup Artist",
  },
  {
    id: 3,
    quote: "These cosmetics are a game changer! Highly recommend.",
    name: "Olivia W.",
    position: "Fashion Blogger",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map(({ id, quote, name, position }) => (
          <div key={id} className="testimonial-card">
            <p className="testimonial-quote">"{quote}"</p>
            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-position">{position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;