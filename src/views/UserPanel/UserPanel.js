import useProtectedRoute from 'hooks/useProtectedRoute';
import React from 'react';
import { useSelector } from 'react-redux';

const UserPanel = () => {
  useProtectedRoute();
  const userData = useSelector((state) => state.userData);
  console.log(userData);

  return <div>content</div>;
};

export default UserPanel;
