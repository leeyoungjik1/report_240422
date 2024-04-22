import React from "react";
import { NavLink, useLocation } from 'react-router-dom'

function QueryNavLink({to, children, ...props}){
    const location = useLocation()
    return (
        <NavLink to={to+location.search} {...props}>{children}</NavLink>
    )
}
export default QueryNavLink