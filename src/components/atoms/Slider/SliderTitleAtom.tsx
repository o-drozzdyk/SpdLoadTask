import React from 'react';
import styled from 'styled-components';

const StyledText = styled.h2`
  margin: 0;
  font-family: 'Syne';
  font-size: 32px;
  font-weight: 800;
  line-height: 38px;
  text-align: center;
  color: rgba(30, 30, 30, 1);
  text-transform: uppercase;
`;

type Props = {
  children: string;
}

export const SliderTitleAtom: React.FC<Props> = ({ children }) => {
  return <StyledText>{children}</StyledText>
};
