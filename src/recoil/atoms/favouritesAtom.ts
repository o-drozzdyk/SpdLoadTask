import { atom } from 'recoil';
import { Mission } from '../../types/Mission';

export const favouritesAtom = atom<Mission[]>({
  key: 'favouritesState',
  default: [],
});
