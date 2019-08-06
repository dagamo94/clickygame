import React from "react";

const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand">{props.children}</a>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    {/* {props.children} */}
                </li>
                <li className="nav-item">
                    {/* Features */}
                </li>
                <li className="nav-item">
                    {/* Pricing */}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;