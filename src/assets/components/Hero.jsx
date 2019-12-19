
import React from "react";
export class Hero extends React.Component {
    render () {
        return (
            <section className="sg-hero">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <img src={"/img/city/icon/"+ this.props.heroImage +".png"} alt={this.props.heroImage} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <h1>
                                {this.props.heroTitle}
                            </h1>
                            <p>
                                {this.props.heroText}
                            </p>
                            {this.props.heroSubText &&
                                <p>{this.props.heroSubText}</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}