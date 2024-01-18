import styled from 'styled-components';
import { Card } from './Card';
import { Mission } from '../../types/Mission';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  overflow: hidden;
  gap: 24px;
  width: 1281px;
`;

type Props = {
  missions: Mission[];
  startIndex?: number;
}

export const CardList: React.FC<Props> = ({ missions, startIndex = 0 }) => {
  const newMissions = missions.slice(startIndex).concat(missions.slice(0, startIndex));

  return (
    <StyledContainer>{newMissions.map((mission: Mission, index: number) => {
      return <Card mission={mission} index={index} key={mission.id} />
    })}
    </StyledContainer>
  );
};
