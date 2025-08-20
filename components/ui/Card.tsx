import React from 'react';
import './Card.css'; // Assuming you have a CSS file for styling

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <span className="card-price">{price}</span>
      </div>
    </div>
  );
};

export default Card;