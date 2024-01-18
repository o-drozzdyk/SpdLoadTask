import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.img`
  background-color: transparent;
`;

export const Logo = () => {
  return (
    <Link to='/'>
      <StyledLogo src="/img/logo.svg" alt="Logo" />
    </Link>
  );
}