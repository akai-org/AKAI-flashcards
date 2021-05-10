import { React, createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Notification from 'components/atoms/Notification/Notification';
import NotificationWrapper from 'components/molecules/NotificationWrapper/NotificationWrapper';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const AUTO_DISMISS = 5000;

export const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(
        () => setNotifications((notifications) => notifications.slice(0, notifications.length - 1)),
        AUTO_DISMISS
      );
      return () => clearTimeout(timer);
    }
  });

  const addNotification = (notification) =>
    setNotifications((notifications) => [notification, ...notifications]);

  const deleteNotification = (notification) => {
    const filtered = notifications.filter(
      (notificationToDelete) => notification.text !== notificationToDelete.text
    );

    setNotifications(filtered);
  };

  const value = { addNotification };

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <NotificationWrapper>
        <TransitionGroup>
          {notifications.map(({ text, type }) => (
            <CSSTransition
              timeout={400}
              classNames="notification"
              className="notification"
              key={text}
            >
              <Notification onClick={() => deleteNotification({ text, type })} type={type}>
                {text}
              </Notification>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </NotificationWrapper>
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]),
};

SnackbarProvider.defaultProps = {
  children: null,
};

export default SnackbarProvider;
