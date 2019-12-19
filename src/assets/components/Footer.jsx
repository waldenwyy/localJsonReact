import React from "react";
export function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 text-center text-md-left">
                    <img className="py-3" src={"/img/city/logo/logo-small.png"} alt="city of mississauga" />
                </div>
                <div className="col-12 col-md-8 text-center text-md-right">
                    <address><p>City of Mississauga, 300 City Centre Drive, Mississauga, Ontario Canada L5B 3C1</p></address>
                    <p>
                        <span className="d-none d-sm-inline-block">|</span>
                        <span className="d-block d-sm-inline-block">
                            <a href="https://www.mississauga.ca/portal/helpfeedback/privacy">Terms of Use & Privacy</a>
                        </span>
                        <span className="d-none d-sm-inline-block">|</span>
                        <span className="d-block d-sm-inline-block">
                            <a href="https://www.mississauga.ca/portal/helpfeedback/websiteaccessibility">Accessibility</a>
                        </span>
                        <span className="d-none d-sm-inline-block">|</span>
                        <span className="d-block d-sm-inline-block">
                            ©1995-2019
                        </span>
                        <span className="d-none d-sm-inline-block">|</span>
                        
                    </p>
                </div>
            </div>
        </div>
    ); 
}