import React from "react";
import "font-awesome/scss/font-awesome.scss";
import { Home } from "./assets/pages/Home";
import { Json } from "./assets/pages/Json";
import { About } from "./assets/pages/About";
import { Navigation } from "./assets/components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer } from "./assets/components/Footer";

function HomeRoute() {
	return <Home />;
}
function JsonRoute() {
	return <Json />;
}
function AboutRoute() {
	return <About />;
}
function App() {
	return (
		<Router>
			<Navigation />
			<div className="sg-main">
				<Route exact path="/" component={HomeRoute} />
				<Route exact path="/json" component={JsonRoute} />
				<Route exact path="/about" component={AboutRoute} />
				<section className="sg-footer bg-dark pl-4">
					<Footer />
                </section>
			</div>
		</Router>
	);
}

export default App;
