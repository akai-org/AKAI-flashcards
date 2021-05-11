import styled from 'styled-components';
import Container from 'components/molecules/SectionContainer/SectionContainer.styled';
import FluidContainer from 'components/molecules/FluidContainer/FluidContainer.styled';

export const StyledFeatures = styled(Container)`
  height: 500px;

  position: relative;
  z-index: 10;

  .features {
    &__item {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export const StyledFeaturesFluid = styled(FluidContainer)`
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  z-index: 11;
  overflow-x: visible;

  .features-fluid {
    &__grid {
      margin: 0 auto;
      position: relative;
      grid-gap: 50px;

      max-width: 992px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      transform: translateY(-50%);

      & > div {
        box-shadow: 0 0 10px 2px rgb(28 15 25 / 10%);
      }
    }
  }
`;
