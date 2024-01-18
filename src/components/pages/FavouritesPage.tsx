import { useRecoilState } from 'recoil';
import { FavouritesBanner } from '../organisms/FavouritesBanner';
import { FavouritesContent } from '../organisms/FavouritesContent';
import { favouritesAtom } from '../../recoil/atoms/favouritesAtom';

export const FavouritesPage = () => {
  const [favourites] = useRecoilState(favouritesAtom);

  return (
    <>
      <FavouritesBanner />

      {favourites.length !== 0 && <FavouritesContent />}
    </>
  );
};
