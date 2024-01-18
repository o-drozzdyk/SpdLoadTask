import React from 'react';
import styled from 'styled-components';

const Styled = styled.span`
  font-family: 'Syne';
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(30, 30, 30, 1);
`;

type Props = {
  children: string;
}

export const CardTitleAtom: React.FC<Props> = ({ children }) => {
  return (
    <Styled>{children}</Styled>
  );
};
