// import Notification from 'components/atoms/Notification/Notification';
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledNotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 25px;
  right: 25px;
`;

const NotificationWrapper = ({ children }) => (
  <StyledNotificationWrapper className="notification-wrapper">{children}</StyledNotificationWrapper>
);

NotificationWrapper.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]),
};

NotificationWrapper.defaultProps = {
  children: null,
};

export default NotificationWrapper;
