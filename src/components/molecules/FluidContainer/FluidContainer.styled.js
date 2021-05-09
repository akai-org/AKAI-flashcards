import styled from 'styled-components';

const StyledFluidContainer = styled.section`
  width: 100%;

  .hero {
    /* height: calc(100vh - 70px); */
    &__background {
      clip-path: url(#my-clip-path);

      background: ${({ theme }) => theme.colors.secondary};
      width: 100%;
      height: 500px;
      position: absolute;
      bottom: 0;
    }

    &__clip {
      position: fixed;
      z-index: -100;
    }
  }
`;

export default StyledFluidContainer;
