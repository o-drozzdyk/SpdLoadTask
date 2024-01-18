import styled from 'styled-components';
import { CardPhotoAtom } from '../atoms/Card/CardPhotoAtom';
import { Mission } from '../../types/Mission';
import { CardMain } from '../molecules/Card/CardMain';

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 411px;
  border: 1px solid rgba(211, 234, 255, 1);
`;

type Props = {
  mission: Mission;
  index: number;
}

export const Card: React.FC<Props> = ({ mission, index }) => {
  return (
    <StyledContainer>
      <CardPhotoAtom index={index} />

      <CardMain mission={mission} />
    </StyledContainer>
  );
};
