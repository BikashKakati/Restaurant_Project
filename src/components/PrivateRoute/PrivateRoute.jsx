import React, { Fragment, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';

function PrivateRoute({children}) {
    const {currentUser} = useContext(AuthContext);
  return (
    <Fragment>
        {currentUser ? children : <Navigate to="/login"/>}
    </Fragment>
  )
}

export default PrivateRoute