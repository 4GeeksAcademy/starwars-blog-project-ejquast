import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="mt-5">
		<h1>Characters</h1>
		<div className="card" style={{minWidth: "18rem",width: "18rem"}}>
			<img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
		<h1>Planets</h1>
		<div className="card" style={{minWidth: "18rem",width: "18rem"}}>
			<img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	</div>
);
