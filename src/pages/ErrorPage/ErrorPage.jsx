import React from 'react';

const ErrorPage = () => {
    return (
        <div className='container d-flex flex-column'>
            <img className='img-fluid mb-5' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1683201119~exp=1683201719~hmac=940c34cd867ab7119d812dc31fd4c16a920d8d78658d5d7cdafb22a99fadcede" alt="" />
            <p className='fs-1 text-center text-danger fw-bold'>Page not found</p>
        </div>
    );
};

export default ErrorPage;