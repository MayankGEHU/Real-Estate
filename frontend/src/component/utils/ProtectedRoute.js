import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { authToken } = useContext(AuthContext);

  return authToken ? element : <Navigate to="/interface" />;
};

export default ProtectedRoute;
