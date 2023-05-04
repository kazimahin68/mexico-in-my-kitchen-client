import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner className='container text-center' animation="border" variant="danger" />
    }
    else if(user){
        return children;
    }
    return (
        <Navigate to={"/login"} state={{from: location}} replace={true}></Navigate>
    );
};

export default PrivateRout;