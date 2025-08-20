import React from 'react';
import './ContactPage.css'; // Importing CSS for styling

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>Get in touch with FashionTV Cosmetics</p>
            </header>
            <main className="contact-form-container">
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </main>
            <footer className="contact-footer">
                <p>&copy; 2023 FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactPage;