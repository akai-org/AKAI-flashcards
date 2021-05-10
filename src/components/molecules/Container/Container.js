import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const StyledContainer = styled.div`
  padding: 34px 28px;
  background-color: ${({ theme }) => theme.colors.container};
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.border};
  position: relative;
`;

const Container = ({ children, type, isVisible, setVisibility, ...props }) => {
  if (type === 'transitioned')
    return (
      <CSSTransition unmountOnExit in={isVisible} timeout={200} classNames="containerAnim">
        <StyledContainer {...props}>{children}</StyledContainer>
      </CSSTransition>
    );
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
  type: propTypes.string,
  isVisible: propTypes.bool,
  setVisibility: propTypes.func,
};

Container.defaultProps = {
  type: null,
  isVisible: null,
  setVisibility: null,
};

export default Container;
