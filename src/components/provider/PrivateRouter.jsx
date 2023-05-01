import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {user} = useContext (AuthContext)
    const location = useLocation()

    console.log (location)


    if (user) {

        return children;
    }
    else {

        return <Navigate to={`/logIn`} state={{ from: location }} replace></Navigate>
    }



};

export default PrivateRouter;