import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="ms-5">
		<h1 className="mt-5 text-danger">Characters</h1>
		<div className="mt-3 card-container">
			<div className="card" style={{minWidth: "18rem",width: "18rem"}}>
				<img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-outline-primary">Learn more!</a>
					<a href="#" className="btn btn-outline-primary"><i class="fa-regular fa-heart"></i></a>
				</div>
			</div>
		</div>
		<h1 className="mt-5 text-danger">Starships</h1>
		<div className="mt-3 card-container">
			<div className="card" style={{minWidth: "18rem",width: "18rem"}}>
				<img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-outline-primary">Learn more!</a>
				</div>
			</div>
		</div>
		<h1 className="mt-5 text-danger">Planets</h1>
		<div className="mt-3 card-container">
			<div className="card" style={{minWidth: "18rem",width: "18rem"}}>
				<img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-outline-primary">Learn more!</a>
				</div>
			</div>
		</div>
	</div>
);
