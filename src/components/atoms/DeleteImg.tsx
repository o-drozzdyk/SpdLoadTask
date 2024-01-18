import styled from 'styled-components';

const StyledDeleteImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const DeleteImg = () => {
  return (
    <StyledDeleteImage src="/img/icons/delete.svg" alt="Delete" />
  );
};
