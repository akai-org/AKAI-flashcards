import React, { useRef } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
// import gsap from 'gsap';

const StyledNotification = styled.div`
  width: 200px;
  border-radius: 10px;
  z-index: 100;
  font-size: 1.6rem;
  padding: 15px;
  color: white;
  cursor: pointer;
  /* opacity: 0; */
  margin-top: 10px;

  /* transform: ${({ isHiding }) => (isHiding ? 'translateY(100%) !important' : null)}; */
  /* stylelint-disable */
  /* opacity: ${({ isHiding }) => (isHiding ? '0 !important' : null)}; */
  /* stylelint-enable */

  ${({ type }) => {
    switch (type) {
      case 'info':
        return `background-color: rgba(33, 150, 243);`;
      case 'error':
        return `background-color: rgba(244, 67, 54);`;
      case 'warning':
        return `background-color: rgba(255, 152, 0);`;
      case 'success':
        return `background-color: rgba(76, 175, 80, 0.6);`;
      default:
        return null;
    }
  }}
`;

const Notification = ({ children, ...props }) => {
  const $notification = useRef(null);

  return (
    <StyledNotification ref={$notification} {...props}>
      {children}
    </StyledNotification>
  );
};

Notification.propTypes = {
  type: propTypes.string.isRequired,
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default Notification;
