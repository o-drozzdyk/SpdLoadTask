import styled from 'styled-components';

const StyledDeleteImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const DeleteImg = () => {
  return (
    <StyledDeleteImage src="https://o-drozzdyk.github.io/SpdLoadTask/img/icons/delete.svg" alt="Delete" />
  );
};
