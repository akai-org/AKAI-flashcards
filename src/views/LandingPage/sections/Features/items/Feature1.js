import React from 'react';
// import propTypes from 'prop-types';
import { ReactComponent as Illustration } from 'assets/vectors/feature2_illustration.svg';
import StyledFeature from './Feature.styled';

const Feature1 = () => (
  <StyledFeature className="feature1">
    <Illustration className="feature1__illustration feature-illustration" />
  </StyledFeature>
);

// Feature1.propTypes = {
// }

export default Feature1;
