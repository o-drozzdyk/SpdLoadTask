import styled from 'styled-components';
import { CardBuyAtom } from '../../atoms/Card/CardBuyAtom';
import { CardFavouritesAtom } from '../../atoms/Card/CardFavouritesAtom';
import { Mission } from '../../../types/Mission';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

type Props = {
  mission: Mission;
}

export const CardButtonsMolecule: React.FC<Props> = ({ mission }) => {
  return (
    <StyledContainer>
      <CardBuyAtom />

      <CardFavouritesAtom mission={mission} />
    </StyledContainer>
  );
};
