import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const featuresData = [
  {
    title: 'Luxury Ingredients',
    description: 'Our cosmetics are made with the finest ingredients for a flawless finish.',
  },
  {
    title: 'Elegant Packaging',
    description: 'Each product is beautifully packaged, reflecting the luxury within.',
  },
  {
    title: 'Cruelty-Free',
    description: 'We are committed to ethical practices and do not test on animals.',
  },
  {
    title: 'Exclusive Collections',
    description: 'Discover limited edition collections that embody elegance and sophistication.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section" style={{ backgroundColor: 'white', color: 'pink' }}>
      <h2 style={{ textAlign: 'center' }}>Our Features</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;