import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { startIndexAtom } from '../../../recoil/atoms/startIndexAtom';

const StyledImg = styled.img`
  width: 411px;
  height: 296px;
`;

const images = [
  './img/banners/photo1.png',
  './img/banners/photo2.png',
  './img/banners/photo3.png',
];

type Props = {
  index: number;
}

export const CardPhotoAtom: React.FC<Props> = ({index}) => {
  const [startIndex] = useRecoilState<number>(startIndexAtom);

  return (
    <StyledImg src={images[(startIndex + index) % 3]} />
  );
};
