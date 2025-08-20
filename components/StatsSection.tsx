import React from 'react';
import './StatsSection.css'; // Importing CSS for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stat-item">
                <h2 className="stat-number">100+</h2>
                <p className="stat-description">Luxury Products</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">50k+</h2>
                <p className="stat-description">Happy Customers</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">20+</h2>
                <p className="stat-description">Years of Experience</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">10+</h2>
                <p className="stat-description">Global Awards</p>
            </div>
        </section>
    );
};

export default StatsSection;