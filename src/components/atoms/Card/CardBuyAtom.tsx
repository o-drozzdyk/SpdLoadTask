import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 12px 0;
  width: 100%;
  background-color: rgba(211, 234, 255, 1);
  border: none;

  font-family: 'Syne';
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 1);

  cursor: pointer;
`;

export const CardBuyAtom = () => {
  return (
    <StyledButton type="button" onClick={() => {}}>buy</StyledButton>
  );
};
