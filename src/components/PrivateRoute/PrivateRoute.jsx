import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { currentUser } = useSelector(state => state.auth);
  return currentUser ? children : <Navigate to="/login" />
}

export default PrivateRoute