import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
  const {currentUser} = useSelector(state => state.auth);
  return (
    <Fragment>
        {currentUser ? children : <Navigate to="/login"/>}
    </Fragment>
  )
}

export default PrivateRoute