import useProtectedRoute from 'hooks/useProtectedRoute';
import React from 'react';

const UserPanel = () => {
  useProtectedRoute();
  return <div>content</div>;
};

export default UserPanel;
