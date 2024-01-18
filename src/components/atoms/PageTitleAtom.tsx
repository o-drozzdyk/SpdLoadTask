import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  font-family: 'Syne', sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
`;

type Props = {
  children: string;
  style?: React.CSSProperties;
}

export const PageTitleAtom: React.FC<Props> = ({ children, style }) => {
  return (
    <StyledText style={style}>
      {children}
    </StyledText>
  );
};
