import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent white
  border-radius: 15px;
  backdrop-filter: blur(10px); // glass effect
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: #fff; // text color
  max-width: 300px;
  margin: 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #ff69b4; // pink color for the title
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #fff; // white text for description
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default GlassCard;