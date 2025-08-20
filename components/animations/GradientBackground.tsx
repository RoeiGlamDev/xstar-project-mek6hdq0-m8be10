import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(270deg, #f8d3e1, #ffffff);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />;
};

export default GradientBackground;