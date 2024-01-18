import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSignInLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 163px;
  text-decoration: none;
  background-color: rgba(211, 234, 255, 1);
`;

const StyledText = styled.span`
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 1);
`;

export const SignInLink = () => {
  return (
    <StyledSignInLink to="#">
      <StyledText>
        sign in
      </StyledText>
    </StyledSignInLink>
  );
};
