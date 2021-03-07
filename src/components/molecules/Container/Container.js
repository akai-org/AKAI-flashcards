import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 34px 28px;
  background-color: ${({ theme }) => theme.colors.container};
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.border};
  position: relative;
`;

export default StyledContainer;
