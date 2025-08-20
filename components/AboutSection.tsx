import React from 'react';
import './AboutSection.css'; // Import CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to FashionTV Cosmetics, where luxury meets elegance. 
                    Our products are crafted with the finest ingredients to enhance your natural beauty.
                </p>
                <p className="about-description">
                    We believe in empowering individuals through beauty, offering a curated selection of high-end cosmetics 
                    that embody sophistication and style.
                </p>
                <p className="about-description">
                    Join us on this journey of self-expression and discover the art of luxury cosmetics.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;