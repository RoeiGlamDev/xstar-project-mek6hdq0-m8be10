import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$49</p>
                        <p className="card-description">Essential cosmetics for everyday elegance.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$99</p>
                        <p className="card-description">Complete set for the sophisticated look.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Package</h3>
                        <p className="card-price">$149</p>
                        <p className="card-description">Exclusive products for the ultimate glamour.</p>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;