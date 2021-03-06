import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: 700;
  font-size: 2rem;
  box-shadow: 0 0 25px 5px rgb(28 15 25 / 25%);
  color: ${({ theme }) => theme.colors.fairFont};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  border-radius: ${({ radius }) => radius || null};
`;

export default StyledButton;
