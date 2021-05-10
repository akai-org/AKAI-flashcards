import React, { useContext } from 'react';
import { FeaturesContext } from 'context/features';
import FeatureBox from './FeatureBox';
import { StyledFeatures, StyledFeaturesFluid } from './Features.styled';

const Features = () => {
  const { items, changeItem, activeItem } = useContext(FeaturesContext);

  return (
    <>
      <StyledFeatures className="features">{activeItem.title}</StyledFeatures>
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
