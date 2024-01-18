import styled from 'styled-components';
import { NavLinkAtom } from '../../atoms/Header/NavLinkAtom';

const StyledNavbar = styled.div`
  display: flex;
  gap: 32px;
`;

export const NavBar = () => {
  return (
    <StyledNavbar className="navbar">
      <NavLinkAtom path="/">Home</NavLinkAtom>

      <NavLinkAtom>Tours</NavLinkAtom>

      <NavLinkAtom>About</NavLinkAtom>

      <NavLinkAtom>Help</NavLinkAtom>
    </StyledNavbar>
  );
};
