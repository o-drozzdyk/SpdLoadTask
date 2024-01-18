import styled from 'styled-components';
import { SliderTitleAtom } from '../atoms/Slider/SliderTitleAtom';
import { SliderButtons } from '../molecules/SliderButtons';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SliderUtils = () => {
  return (
    <StyledContainer>
      <SliderTitleAtom>popular tours</SliderTitleAtom>

      <SliderButtons />
    </StyledContainer>
  );
};
