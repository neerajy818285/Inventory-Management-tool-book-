import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
    const authContext=useContext(AuthContext);
    const {user,loading}=authContext;
    const location =useLocation();
    if(loading){
        return<div className="text-centre">
            <Spinner aria-label="Center-aligned spinner example"/>
        </div>
    }
    if(user){
        return children;
    }
  return (
    <Navigate to="/login" state={{from:location}} replace></Navigate>
  )
}

export default PrivateRoute