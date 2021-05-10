import React from 'react';
import { ReactComponent as HeroIllustration } from 'assets/vectors/hero_guy.svg';
import { ReactComponent as DotsIllustration } from 'assets/vectors/hero_dots.svg';
import Underlined from 'components/atoms/Underilned/Underlined';
import Button from 'components/atoms/Button/Button';
import StyledFluidContainer from '../FluidContainer/FluidContainer.styled';
import StyledHero from './Hero.styled';

const Hero = () => (
  <StyledFluidContainer className="hero">
    <StyledHero className="hero__container">
      <div className="hero__grid">
        <div className="hero__content">
          <h1 className="hero__headline">
            Meet the <Underlined>modern way</Underlined> to learn
            <DotsIllustration className="hero__dots" />
          </h1>
          <Button width="225px" height="50px" radius="15px" className="hero__button">
            Start now!
          </Button>
        </div>
      </div>
      <HeroIllustration className="hero__illustration" />
    </StyledHero>
    <div className="hero__background" />
    <svg className="hero__clip">
      <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M1,1 L0,1 L0,0.18 C0.002,0.185,0.013,0.21,0.032,0.245 C0.043,0.268,0.056,0.291,0.069,0.313 C0.085,0.341,0.102,0.367,0.119,0.391 C0.162,0.453,0.206,0.502,0.25,0.537 C0.263,0.548,0.275,0.557,0.288,0.565 C0.301,0.573,0.315,0.58,0.328,0.586 C0.342,0.592,0.356,0.596,0.37,0.599 C0.384,0.602,0.399,0.604,0.413,0.604 C0.424,0.604,0.436,0.603,0.447,0.601 C0.462,0.598,0.478,0.594,0.494,0.587 C0.51,0.581,0.526,0.572,0.543,0.562 C0.558,0.553,0.574,0.542,0.591,0.529 C0.607,0.517,0.623,0.503,0.639,0.488 C0.695,0.437,0.755,0.368,0.818,0.284 C0.842,0.251,0.867,0.216,0.891,0.179 C0.911,0.15,0.93,0.119,0.949,0.088 C0.979,0.04,0.997,0.007,1,0.002 L1,1" />
      </clipPath>
    </svg>
    <DotsIllustration className="hero__dots-2" />
  </StyledFluidContainer>
);

export default Hero;
