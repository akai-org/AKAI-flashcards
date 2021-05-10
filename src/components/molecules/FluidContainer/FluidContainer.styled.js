import styled from 'styled-components';

const StyledFluidContainer = styled.section`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;

  .hero {
    /* height: calc(100vh - 70px); */
    &__background {
      clip-path: url(#my-clip-path);

      background: ${({ theme }) => theme.colors.secondary};
      width: 100%;
      height: 500px;
      position: absolute;
      bottom: 0;
      display: none;

      ${({ theme }) => theme.breakpoints.laptop} {
        display: block;
      }
    }

    &__clip {
      position: fixed;
      z-index: -100;
    }

    &__dots-2 {
      position: absolute;
      top: -90px;
      right: 120px;
      transform: scale(1.3) rotate(180deg);
      display: none;
      z-index: -1;

      ${({ theme }) => theme.breakpoints.laptop} {
        display: block;
      }
    }
  }
`;

export default StyledFluidContainer;
