import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(255, 192, 203, 0.5), rgba(255, 255, 255, 0.5));
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/path/to/your/image.jpg'); // Replace with actual image path
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const ParallaxSection: React.FC = () => {
  return (
    <ParallaxContainer>
      <BackgroundImage />
      <Content>
        <Title>Luxury Awaits</Title>
        <Subtitle>Discover Your Beauty</Subtitle>
      </Content>
    </ParallaxContainer>
  );
};

export default ParallaxSection;