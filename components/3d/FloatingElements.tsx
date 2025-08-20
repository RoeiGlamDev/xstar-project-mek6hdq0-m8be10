import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  background: linear-gradient(135deg, #f8d3e0, #ffffff); // Pink to white gradient
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 150px; // Width of the floating element
  height: 150px; // Height of the floating element
  border-radius: 50%; // Circular shape
  background-color: #e91e63; // Pink color
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // Subtle shadow for elegance
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0%, 100% {
      transform: translatey(0); // Start and end position
    }
    50% {
      transform: translatey(-20px); // Floating effect
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ left: '20%', top: '30%' }} />
      <FloatingElement style={{ right: '20%', top: '50%' }} />
      <FloatingElement style={{ left: '40%', bottom: '20%' }} />
      <FloatingElement style={{ right: '30%', bottom: '10%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;