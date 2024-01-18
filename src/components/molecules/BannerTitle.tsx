import styled from 'styled-components';
import { PageTitleAtom } from '../atoms/PageTitleAtom';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  width: 1107px;
  height: 379px;
  margin-inline: auto;
  padding-top: 232px;
`;

const StyledLargeText = styled.span`
  align-self: center;
  font-family: 'Syne';
  font-size: 310px;
  font-weight: 800;
  line-height: 372px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
`;

export const BannerTitle = () => {
  return (
    <StyledContainer>
      <PageTitleAtom style={{ transform: "translate(0, -100%)" }}>the space is waiting for</PageTitleAtom>
      
      <StyledLargeText>you</StyledLargeText>
    </StyledContainer>
  );
};
