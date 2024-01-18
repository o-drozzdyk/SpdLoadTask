import styled from 'styled-components';
import { SliderUtils } from './SliderUtils';
import { CardList } from './CardList';
import { Pagination } from '../molecules/Pagination';
import { useRecoilState } from 'recoil';
import { missionsState } from '../../recoil/atoms/missionsAtom';
import { startIndexAtom } from '../../recoil/atoms/startIndexAtom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: max-content;
  margin: 96px auto 64px;
`;

export const CardSlider = () => {
  const [missions] = useRecoilState(missionsState);
  const [startIndex] = useRecoilState<number>(startIndexAtom);

  return (
    <StyledContainer id="tours">
      <SliderUtils />

      <CardList missions={missions} startIndex={startIndex} />

      <Pagination />
    </StyledContainer>
  );
};
