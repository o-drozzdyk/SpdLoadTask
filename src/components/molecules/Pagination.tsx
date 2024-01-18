import styled from 'styled-components';
import { CircleAtom } from '../atoms/CircleAtom';
import { useRecoilState } from 'recoil';
import { missionsState } from '../../recoil/atoms/missionsAtom';
import { startIndexAtom } from '../../recoil/atoms/startIndexAtom';

const StyledContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-inline: auto;
`;

export const Pagination = () => {
  const [missions] = useRecoilState(missionsState);
  const [startIndex] = useRecoilState<number>(startIndexAtom);

  return (
    <StyledContainer>
      {missions.map((item, index) => <CircleAtom isActive={index === startIndex} key={item.id} />)}
    </StyledContainer>
  );
};
