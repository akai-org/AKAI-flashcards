import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div`
  width: 200px;
  background-color: red;
  border-radius: 10px;
  z-index: 100;
  font-size: 1.6rem;
  padding: 15px;
  color: white;
  opacity: 0;
  transition: transform 0.4s ease-in-out;
  margin-top: 10px;

  animation: notification-appear 0.3s forwards 0.1s ease-in-out;

  @keyframes notification-appear {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Notification = () => {
  const [isOpen, setOpen] = useState(true);

  const setClose = () => {
    setTimeout(() => setOpen(false), 2000);
  };

  useEffect(() => setClose());

  if (isOpen) return <StyledNotification>asd</StyledNotification>;

  return null;
};

export default Notification;
