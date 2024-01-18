import { atom } from 'recoil';

export const startIndexAtom = atom<number>({
  key: 'startIndexState',
  default: 0,
});
