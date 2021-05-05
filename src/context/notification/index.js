import React, { createContext } from 'react';
import { createPortal } from 'react-dom';
import NotificationWrapper from 'components/molecules/NotificationWrapper/NotificationWrapper';

const NotificationWrapperElement = createPortal(
  <NotificationWrapper />,
  document.querySelector('#root')
);
const WrapperContext = createContext({ NotificationWrapper, NotificationWrapperElement });

export default WrapperContext;
