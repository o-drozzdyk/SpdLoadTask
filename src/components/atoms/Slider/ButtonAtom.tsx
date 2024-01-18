import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { startIndexAtom } from '../../../recoil/atoms/startIndexAtom';
import { missionsState } from '../../../recoil/atoms/missionsAtom';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(236, 236, 236, 1);
  border: none;
  cursor: pointer;
`;

const StyledArrowLeft = styled.img`
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
`;

const StyledArrowRight = styled.img`
  width: 24px;
  height: 24px;
`;

type Props = {
  direction: 'left' | 'right';
}

export const ButtonAtom: React.FC<Props> = ({ direction }) => {
  const [missions] = useRecoilState(missionsState);
  const setStartIndex = useSetRecoilState<number>(startIndexAtom);

  const moveLeft = () => {
    setStartIndex(curr => curr < missions.length - 1 ? curr + 1 : 0);
  };

  const moveRight = () => {
    setStartIndex(curr => curr > 0 ? curr - 1 : missions.length - 1);
  };

  return (
    <StyledButton type="button" onClick={() => {}}>
      {direction === "left"
        ? <StyledArrowLeft src="./img/icons/arrow.svg" alt="Arrow left" onClick={moveRight} />
        : <StyledArrowRight src="./img/icons/arrow.svg" alt="Arrow right" onClick={moveLeft} />
      }
    </StyledButton>
  );
};
