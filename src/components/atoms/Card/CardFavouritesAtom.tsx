import { useRecoilState } from 'recoil';
import { StyledFavouritesButton } from '../../../styles/FavouritesButton'
import { FavouritesImg } from '../FavouritesImg'
import { Mission } from '../../../types/Mission';
import { favouritesAtom } from '../../../recoil/atoms/favouritesAtom';
import { DeleteImg } from '../DeleteImg';

type Props = {
  mission: Mission;
}

export const CardFavouritesAtom: React.FC<Props> = ({ mission }) => {
  const [favourites, setFavourites] = useRecoilState(favouritesAtom);

  const isFavourite = favourites.find(item => item.id === mission.id);
  
  return (
    <StyledFavouritesButton onClick={() => setFavourites(curr => {
      return isFavourite ? curr.filter(item => item.id !== mission.id) : [...curr, mission];
    })}>
      {isFavourite ? <DeleteImg /> : <FavouritesImg />}
    </StyledFavouritesButton>
  );
};
