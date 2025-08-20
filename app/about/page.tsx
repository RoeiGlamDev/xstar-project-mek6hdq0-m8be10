import React from 'react';
import './AboutPage.css'; // Assuming you have a CSS file for styles

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>Welcome to FashionTV Cosmetics</h1>
                <p>Your destination for luxury beauty products.</p>
            </header>
            <section className="about-content">
                <h2>About Us</h2>
                <p>
                    At FashionTV Cosmetics, we believe in elegance and sophistication. Our products are designed for those who appreciate the finer things in life. 
                    With a palette inspired by the beauty of pink and white, we offer a range of cosmetics that enhance your natural beauty.
                </p>
                <p>
                    Join us on a journey of glamour and style, where every product is crafted with care and precision, ensuring you look and feel your best.
                </p>
            </section>
            <footer className="about-footer">
                <p>© 2023 FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;