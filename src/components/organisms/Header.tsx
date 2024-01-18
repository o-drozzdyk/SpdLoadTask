import { Logo } from '../atoms/Header/Logo';
import { NavBar } from '../molecules/Header/NavBar';
import { NavBarUtils } from '../molecules/Header/NavBarUtils';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;

  background-color: rgba(30, 30, 30, 0.48);
  z-index: 1;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <NavBar />

      <NavBarUtils />

    </StyledHeader>
  );
};
