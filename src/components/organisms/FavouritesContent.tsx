import styled from 'styled-components';
import { ClearAllButton } from '../atoms/ClearAllButton';
import { useRecoilState } from 'recoil';
import { favouritesAtom } from '../../recoil/atoms/favouritesAtom';
import { CardList } from './CardList';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 1280px;
  margin: 64px auto;
`;

export const FavouritesContent = () => {
  const [favourites] = useRecoilState(favouritesAtom);

  return (
    <StyledContainer>
      <ClearAllButton />

      <CardList missions={favourites} />
    </StyledContainer>
  );
};
