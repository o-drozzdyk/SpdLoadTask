import styled from 'styled-components';
import { PageTitleAtom } from '../atoms/PageTitleAtom';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 440px;
  background-image: url("./img/banners/favourites-banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FavouritesBanner = () => {
  return (
    <StyledContainer>
      <PageTitleAtom>favourites</PageTitleAtom>
    </StyledContainer>
  );
};
