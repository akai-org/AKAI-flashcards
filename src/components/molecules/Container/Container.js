import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 34px 28px;
  background-color: ${({ theme }) => theme.colors.container};
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.border};
  position: relative;
  opacity: 0;

  animation: login-panel-appear 0.1s forwards ease-in-out;
  @keyframes login-panel-appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export default StyledContainer;
