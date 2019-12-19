import React from "react";
import  { Hero } from "../components/Hero";
import { Breadcrumbs } from "../components/Breadcrumbs";
// import { Menu } from "../components/Menu";
export class Home extends React.Component {

    state= {
        breadCrumbs: {
            hide: true
        },
        heroTitle: "City Online Services",
        heroText: "Online Self-service portal",
        heroImage: "icon-mississauga"
    }

    render() {
        return (
            <div>
                <Breadcrumbs 
                hide={this.state.breadCrumbs.hide}
                />
                <section className="sg-hero">
                    <Hero 
                    heroTitle={this.state.heroTitle} 
                    heroText={this.state.heroText} 
                    heroImage={this.state.heroImage}
                    />
                </section>
                {/* <section className="sg-menu">
                    <Menu />
                </section> */}
            </div>
        );
    }
}