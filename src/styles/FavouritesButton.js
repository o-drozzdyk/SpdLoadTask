import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFavouritesLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;

  background-color: rgba(236, 236, 236, 1);

  &.active {
    background-color: rgba(221, 55, 125, 1);

    & > img {
      filter: invert(100%);
    }
  }
`;

export const StyledFavouritesButton = styled.button`
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  border: none;
  background-color: rgba(236, 236, 236, 1);
  cursor: pointer;
`;
