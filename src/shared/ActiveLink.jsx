import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "text-warning text-decoration-none me-4 fw-bold fs-5" : "text-decoration-none text-black me-4 fw-semibold fs-5"
                }
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;