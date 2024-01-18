import styled from 'styled-components';

const StyledFavouritesImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const FavouritesImg = () => {
  return (
    <StyledFavouritesImage src="https://o-drozzdyk.github.io/SpdLoadTask/img/icons/heart.svg" alt="Heart" />
  );
};
