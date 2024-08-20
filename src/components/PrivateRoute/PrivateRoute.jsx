import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAuthModel } from '../../services/redux/slices/authSlice';

function PrivateRoute({ children }) {
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  if(!currentUser){
    dispatch(setAuthModel(true));
    return null;
  }
  return children;
}

export default PrivateRoute
