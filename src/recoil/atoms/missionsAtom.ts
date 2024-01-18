import { atom } from 'recoil';
import { Mission } from '../../types/Mission';

export const missionsState = atom<Mission[]>({
  key: 'missionsState',
  default: [],
});
