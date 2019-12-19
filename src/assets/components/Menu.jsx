
import React from "react";
import { NavLink } from "react-router-dom";
export function Menu() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col sg-pt-3-5">
                    <h2>
                        Get Started
                    </h2>
                    <p>
                        Refer to the sections below for full style rules and guidelines related to the Purolator brand, design elements and digital components.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 sg-mb-2 px-md-4 sg-px-lg-2-8">
                    <div className="sg-menu-card px-5">
                        <h3 className="sg-pt-4 pb-4">
                            Brand
                        </h3>
                        <img className="pb-4" src="/img/city/icon/icon-brand.png" alt="brand"/>
                        <p className="pb-5">
                            This section includes guidelines on the Purolator brand voice, tone, and logo usage.
                        </p>
                        <NavLink className="sg-cta-transBlue mt-5 sg-mb-5 mx-lg-0" role="button" to="/brand/overview">
                            See Brand Guidelines
                        </NavLink>
                    </div>
                </div>
                <div className="col-md-4 sg-mb-2 px-md-4 sg-px-lg-2-8">
                    <div className="sg-menu-card px-5">
                        <h3 className="sg-pt-4 pb-4">
                            Design Elements
                        </h3>
                        <img className="pb-4" src="/img/city/icon/icon-design.png" alt="design"/>
                        <p className="pb-5">
                            This section includes guidelines on typography, colours, layout, links, imagery, and icons.
                        </p>
                        <NavLink className="sg-cta-transRed mt-5 sg-mb-5 mx-lg-0" role="button" to="/design/overview">
                            See Design Elements
                        </NavLink>
                    </div>
                </div>
                <div className="col-md-4 sg-mb-2 px-md-4 sg-px-lg-2-8">
                    <div className="sg-menu-card px-5">
                        <h3 className="sg-pt-4 pb-4">
                            Components
                        </h3>
                        <img className="pb-4" src="/img/city/icon/icon-components.png" alt="components"/>
                        <p className="pb-5">
                            This section includes guidelines on buttons, forms, cards, navigation, carousels, tables, and more.
                        </p>
                        <NavLink className="sg-cta-transCyan mt-5 sg-mb-5 mx-lg-0" role="button" to="/components/overview">
                            See Components
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    ); 
}