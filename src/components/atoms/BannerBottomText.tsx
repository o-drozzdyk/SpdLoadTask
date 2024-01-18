import styled from 'styled-components';

const StyledContainer = styled.a`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 57px;
  text-decoration: none;
  scroll-behavior: smooth;
`;

const StyledText = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  text-align: center;

  color: rgba(255, 255, 255, 1);
  -webkit-text-stroke: 1px rgba(0, 0, 0, 1);
`;

const StyledImage = styled.img`
  width: 20px;
  height: 25px;
`;

export const BottomText = () => {
  return (
    <StyledContainer href="#tours">
      <StyledText>
        Explore tours
      </StyledText>

      <StyledImage src="https://o-drozzdyk.github.io/SpdLoadTask/img/icons/arrow-down.svg" alt="Arrow down" />
    </StyledContainer>
  );
};
