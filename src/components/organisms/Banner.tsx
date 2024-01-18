import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BannerTitle } from '../molecules/BannerTitle';
import { BottomText } from '../atoms/BannerBottomText';

const StyledBanner = styled.div`
  width: 100%;
  height: 740px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 1s ease-in-out;
  `;

const images = [
  './img/banners/photo1.png',
  './img/banners/photo2.png',
  './img/banners/photo3.png',
]

export const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }, 5000);

    return () =>  clearInterval(intervalId);
  }, []);

  const currentImage = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <StyledBanner style={currentImage}>
      <BannerTitle />

      <BottomText />
    </StyledBanner>
  );
};
