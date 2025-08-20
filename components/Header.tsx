import React from 'react';
import './Header.css'; // Importing CSS for styling

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>FashionTV Cosmetics</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;