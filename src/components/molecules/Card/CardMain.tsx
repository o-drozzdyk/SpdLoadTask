import styled from 'styled-components';
import { CardTextMolecule } from './CardTextMolecule';
import { CardButtonsMolecule } from './CardButtonsMolecule';
import { Mission } from '../../../types/Mission';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 32px 24px;
  height: 276px;
`;

type Props = {
  mission: Mission;
}

export const CardMain: React.FC<Props> = ({ mission }) => {
  return (
    <StyledContainer>
      <CardTextMolecule mission={mission} />
      
      <CardButtonsMolecule mission={mission} />
    </StyledContainer>
  );
};
