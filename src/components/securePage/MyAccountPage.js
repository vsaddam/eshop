import React from 'react';
import { Navigate } from 'react-router-dom';

const MyAccountPage = ({children}) => {
    const jwt = localStorage.getItem('username');

  return (
    jwt !== 'null' ? children : <Navigate to='/login'/>
  )
}
export default MyAccountPage;