import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

export class NavigationMenu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/json">Json Data</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/about">About</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export const Navigation = withRouter(NavigationMenu);
