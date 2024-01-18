import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { favouritesAtom } from '../../recoil/atoms/favouritesAtom';

const StyledButton = styled.button`
  padding: 0;
  align-self: flex-end;
  border: none;
  font-family: 'Lato';
  font-size: 24px;
  font-weight: 300;
  line-height: 29px;
  text-align: center;
  background-color: transparent;
  color: rgba(85, 107, 132, 1);
  cursor: pointer;
`;

export const ClearAllButton = () => {
  const setFavourites = useSetRecoilState(favouritesAtom);

  return (
    <StyledButton type="button" onClick={() => setFavourites([])}>
      Clear all
    </StyledButton>
  );
};
