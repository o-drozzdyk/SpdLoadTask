import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Styled = styled.span`
  font-family: 'Lato';
  font-size: 24px;
  font-weight: 300;
  line-height: 29px;
  text-align: center;
  color: rgba(85, 107, 132, 1);

  &.touchable {
    cursor: pointer;
  }
`;

type Props = {
  children: string;
}

export const CardDescriptionAtom: React.FC<Props> = ({ children }) => {
  const [isFullTextShown, setIsFullTextShown] = useState(false);
  
  useEffect(() => {
    if (children) {
      setIsFullTextShown(children.length <= 100);
    }
  }, []);

  return (
      <Styled 
        className={(children && children.length > 100) ? "touchable" : ""} 
        onClick={() => setIsFullTextShown(curr => !curr)}
      >
        {isFullTextShown 
          ? children
          : getDetailsText(children)}
      </Styled>
  );
};

function getDetailsText (text: string) {
  if (text && text.length > 100) {
    return `${text.slice(0, 100)}...`;
  } else {
    return text;
  }
}
