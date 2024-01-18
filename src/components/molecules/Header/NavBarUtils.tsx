import { FavouritesLink } from '../../atoms/Header/FavouritesLink';
import { SignInLink } from '../../atoms/Header/SignInLink';
import styled from 'styled-components';

const StyledNavbarUtils = styled.div`
  display: flex;
  gap: 12px;
`;

export const NavBarUtils = () => {
  return (
    <StyledNavbarUtils>
      <FavouritesLink />

      <SignInLink />
    </StyledNavbarUtils>
  );
};
