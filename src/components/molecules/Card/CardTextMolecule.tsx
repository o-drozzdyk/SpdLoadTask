import styled from 'styled-components';
import { CardTitleAtom } from '../../atoms/Card/CardTitleAtom';
import { CardDescriptionAtom } from '../../atoms/Card/CardDescriptionAtom';
import { Mission } from '../../../types/Mission';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

type Props = {
  mission: Mission;
}

export const CardTextMolecule: React.FC<Props> = ({ mission }) => {
  return (
    <StyledContainer>
      <CardTitleAtom>{mission.mission_name}</CardTitleAtom>

      <CardDescriptionAtom>{mission.details}</CardDescriptionAtom>
    </StyledContainer>
  );
};
