import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Character } from "./views/Character";
import { Planet } from "./views/Planet";
import { Starship } from "./views/Starship";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div style={{ paddingTop: '60px',paddingBottom: '120px' }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:uid" element={<Character />} />
						<Route path="/planet/:uid" element={<Planet />} />
						<Route path="/starship/:uid" element={<Starship />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
