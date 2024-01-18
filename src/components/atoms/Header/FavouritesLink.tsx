import { StyledFavouritesLink } from '../../../styles/FavouritesButton';
import { FavouritesImg } from '../FavouritesImg';

export const FavouritesLink = () => {
  return (
    <StyledFavouritesLink to="/favourites" 
      className={({ isActive }) => isActive ? "active" : ""}
    >
      <FavouritesImg />
    </StyledFavouritesLink>
  );
};
