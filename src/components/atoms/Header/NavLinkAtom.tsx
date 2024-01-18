import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';

export const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;

  &.active-link {
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 1px;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 1);
    }
  }
`;

type Props = {
  children: string;
  path?: string;
};

export const NavLinkAtom: React.FC<Props> = ({ children, path = '#' }) => {
  const locaton = useLocation();
  const isActive = locaton.pathname === path;

  return (
    <StyledNavLink
      to={path}
      className={isActive ? "active-link" : ""}
    >
      {children}
    </StyledNavLink>
  );
}
