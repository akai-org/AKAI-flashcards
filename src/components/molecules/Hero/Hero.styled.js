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
      max-width: 55%;
      position: relative;
      transform: translateY(-20%);
    }

    &__headline {
      font-size: 7rem;
      color: ${({ theme }) => theme.colors.secondary};
    }

    &__illustration {
      position: absolute;
      z-index: 30;
      bottom: 110px;
      right: 0;
    }

    &__button {
      background-color: ${({ theme }) => theme.colors.pink};
      margin-top: 20px;
    }
  }
`;

export default StyledHero;
