import styled from 'styled-components';

const StyledUnderlined = styled.span`
  display: inline-block;
  position: relative;
  white-space: nowrap;

  .underline-block {
    position: absolute;
    background-color: ${({ color }) => color};
    width: 100%;
    height: 20%;
    bottom: 10%;
    z-index: -1;
  }
`;

export default StyledUnderlined;
