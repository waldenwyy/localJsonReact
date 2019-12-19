import React from "react";
import { NavLink } from "react-router-dom";
export class Breadcrumbs extends React.Component {
    render () {
        return (
            <div>
                {this.props.hide?"":<nav className="mod-breadcrumbs sg-breadcrumbs d-none d-md-block">
                    <ul role="menu" aria-label="breadcrumbs">
                        <li role="menuitem">
                            <NavLink exact to="/">
                                <i className="fa fa-home" aria-hidden="true"></i><span className="breadcrumbsHidden">Home</span>
                            </NavLink>
                        </li>
                        <li role="menuitem"><NavLink to={this.props.url}>{this.props.parent}</NavLink></li>
                        <li role="menuitem" aria-disabled="true">{this.props.child}</li>
                    </ul>
                </nav>}
                
                <div className="d-inline-block d-md-none sg-mb-headline">
                    <img src="/img/city/logo/logo-1-colour.png" alt="city"/> 
                    <p className="d-inline-block d-md-none">Styleguide</p>
                </div>
            </div>
        );
    }
}


