import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(30, 30, 30, 1);
  border-radius: 50%;
`;

const StyledInnerContainer = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(30, 30, 30, 1);
`;

type Props = {
  isActive: boolean;
}

export const CircleAtom: React.FC<Props> = ({ isActive }) => {
  return (
    <StyledContainer>
      {isActive && <StyledInnerContainer></StyledInnerContainer>}
    </StyledContainer>
  );
};
