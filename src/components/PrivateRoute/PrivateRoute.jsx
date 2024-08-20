import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { setAuthModel } from '../../services/redux/slices/authSlice';

function PrivateRoute({ children }) {
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  if(!currentUser){
    dispatch(setAuthModel(true));
    return <Navigate to={location.pathname}/>;
  }
  return children;
}

export default PrivateRoute
