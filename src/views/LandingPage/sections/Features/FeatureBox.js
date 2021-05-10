import Container from 'components/molecules/Container/Container';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledFeatureBox = styled(Container)`
  height: 200px;
  position: relative;
  z-index: 20;

  &:hover {
    cursor: pointer;
  }

  transition: transform 0.1s linear;
  transform: ${({ isActive }) => (isActive ? 'translateY(-20px) scale(1.04)' : null)};

  border: ${({ isActive }) =>
    isActive ? `solid 1px ${({ theme }) => theme.colors.secondary}` : null};
`;

const FeatureBox = ({ children, isActive, ...props }) => (
  <StyledFeatureBox {...props} isActive={isActive}>
    {children}
  </StyledFeatureBox>
);

FeatureBox.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
  isActive: propTypes.bool.isRequired,
};

export default FeatureBox;
