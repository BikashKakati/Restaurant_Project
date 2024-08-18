import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAuthModel } from '../../services/redux/slices/authSlice';

function PrivateRoute({ children }) {
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  if(currentUser){
    return children
  }else{
    dispatch(setAuthModel(true));
    return <Navigate to={"/"}/>
  }
}

export default PrivateRoute