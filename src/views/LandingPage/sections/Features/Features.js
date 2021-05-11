import React, { useContext } from 'react';
import { FeaturesContext } from 'context/features';
import Container from 'components/molecules/Container/Container';
import FeatureBox from './FeatureBox';
import { StyledFeatures, StyledFeaturesFluid } from './Features.styled';
import Feature0 from './items/Feature0';
import Feature1 from './items/Feature1';
import Feature2 from './items/Feature2';

const Features = () => {
  const { items, changeItem, activeItem } = useContext(FeaturesContext);

  return (
    <>
      <StyledFeatures className="features">
        <Container
          type="transitioned"
          className="features__item"
          classNames="first"
          isVisible={items.indexOf(activeItem) === 0}
          timeout={0}
        >
          <Feature0 />
        </Container>
        <Container
          type="transitioned"
          className="features__item"
          classNames="first"
          isVisible={items.indexOf(activeItem) === 1}
          timeout={0}
        >
          <Feature1 />
        </Container>
        <Container
          type="transitioned"
          className="features__item"
          classNames="first"
          isVisible={items.indexOf(activeItem) === 2}
          timeout={0}
        >
          <Feature2 />
        </Container>
        {/* )} */}
      </StyledFeatures>
      <StyledFeaturesFluid className="features-fluid">
        <div className="features-fluid__grid">
          {items.map(({ title }, index) => (
            <FeatureBox
              key={title}
              onMouseEnter={() => {
                changeItem(index);
              }}
              isActive={index === items.indexOf(activeItem)}
            >
              {title}
            </FeatureBox>
          ))}
        </div>
      </StyledFeaturesFluid>
    </>
  );
};

export default Features;
