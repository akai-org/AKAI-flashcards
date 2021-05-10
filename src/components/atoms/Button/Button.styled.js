import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: 500;
  font-size: 1.6rem;
  box-shadow: 0 0 10px 2px rgb(28 15 25 / 10%);
  color: ${({ theme }) => theme.colors.fairFont};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => `${width} !important` || null};
  height: ${({ height }) => `${height} !important` || null};
  border-radius: ${({ radius }) => `${radius} !important` || null};

  ${({ theme }) => theme.breakpoints.laptop} {
    font-weight: 700;
    font-size: 2rem;
  }
`;

export default StyledButton;
