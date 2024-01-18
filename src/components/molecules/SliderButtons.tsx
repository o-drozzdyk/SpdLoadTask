import styled from 'styled-components';
import { ButtonAtom } from '../atoms/Slider/ButtonAtom';

const StyledContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const SliderButtons = () => {
  return (
    <StyledContainer>
      <ButtonAtom direction="left" />
      
      <ButtonAtom direction="right" />
    </StyledContainer>
  );
};
