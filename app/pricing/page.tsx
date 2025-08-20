import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
  return (
    <div className="pricing-page">
      <header className="header">
        <h1 className="title">Luxury FashionTV Cosmetics</h1>
        <p className="subtitle">Elevate Your Beauty Experience</p>
      </header>
      <section className="pricing-section">
        <h2 className="section-title">Our Pricing Plans</h2>
        <div className="pricing-cards">
          <div className="card">
            <h3 className="card-title">Basic Plan</h3>
            <p className="price">$29/month</p>
            <ul className="features">
              <li>Access to basic products</li>
              <li>Monthly beauty tips</li>
              <li>Exclusive member discounts</li>
            </ul>
            <button className="btn">Choose Plan</button>
          </div>
          <div className="card premium">
            <h3 className="card-title">Premium Plan</h3>
            <p className="price">$59/month</p>
            <ul className="features">
              <li>All Basic Plan features</li>
              <li>Access to premium products</li>
              <li>Personalized beauty consultations</li>
            </ul>
            <button className="btn">Choose Plan</button>
          </div>
          <div className="card deluxe">
            <h3 className="card-title">Deluxe Plan</h3>
            <p className="price">$99/month</p>
            <ul className="features">
              <li>All Premium Plan features</li>
              <li>Exclusive event invitations</li>
              <li>Complimentary gift sets</li>
            </ul>
            <button className="btn">Choose Plan</button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p className="footer-text">© 2023 Luxury FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PricingPage;