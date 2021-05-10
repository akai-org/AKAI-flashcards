import styled from 'styled-components';
import Container from 'components/molecules/SectionContainer/SectionContainer.styled';

const StyledHero = styled(Container)`
  height: calc(100vh - 70px);
  position: relative;

  .hero {
    &__container {
      display: block;
    }

    &__grid {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 20;
      height: 100%;

      & svg {
        max-width: 100%;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      position: relative;
      transform: translateY(-20%);

      ${({ theme }) => theme.breakpoints.laptop} {
        padding-left: 20px;
        padding-right: 0;
        max-width: 55%;
      }

      ${({ theme }) => theme.breakpoints.desktop} {
        padding-left: 0;
        padding-right: 0;
        max-width: 55%;
      }
    }

    &__headline {
      font-size: 5rem;
      color: ${({ theme }) => theme.colors.secondary};
      position: relative;

      ${({ theme }) => theme.breakpoints.laptop} {
        font-size: 7rem;
      }
    }

    &__dots {
      position: absolute;
      transform: rotate(180deg) translateX(30%) translateY(15%) scale(1.3);
      z-index: -1;
      ${({ theme }) => theme.breakpoints.laptop} {
        transform: translateX(-66%) translateY(-55%) scale(1.3);
        top: 0;
        left: 0;
      }
    }

    &__illustration {
      position: absolute;
      z-index: 30;
      bottom: 110px;
      right: 0;
      display: none;

      ${({ theme }) => theme.breakpoints.laptop} {
        display: block;
      }
    }

    &__button {
      background-color: ${({ theme }) => theme.colors.pink};
      margin-top: 20px;
    }
  }
`;

export default StyledHero;
