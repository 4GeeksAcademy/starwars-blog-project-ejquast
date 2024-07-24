import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../component/FavoritesContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

	const { toggleFavorite, favorites } = useFavorites();
  	const isFavorite = favorites.includes(cardTitle);
	const handleHeartClick = () => {
		toggleFavorite(cardTitle);
	};
	
	return (
	<div className="ms-5">
		<h1 className="mt-5 text-danger">Characters</h1>
		<div className="mt-3 card-container">
			<div className="card" style={{minWidth: "400px",width: "400px"}}>
				<img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title mb-3">Name</h5>
					<p className="card-text mb-0">Gender:</p>
					<p className="card-text mb-0">Hair Color:</p>
					<p className="card-text">Eye Color:</p>
					<div className="d-flex justify-content-between">
						<a href="#" className="btn btn-outline-primary">Learn more!</a>
						<a href="#" className="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></a>
					</div>
				</div>
			</div>
		</div>
		<h1 className="mt-5 text-danger">Starships</h1>
		<div className="mt-3 card-container">
			<div className="card" style={{minWidth: "400px",width: "400px"}}>
				<img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Name</h5>
					<p className="card-text mb-0">Gender:</p>
					<p className="card-text mb-0">Hair Color:</p>
					<p className="card-text">Eye Color:</p>
					<div className="d-flex justify-content-between">
						<a href="#" className="btn btn-outline-primary">Learn more!</a>
						<a href="#" className="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></a>
					</div>
				</div>
			</div>
		</div>
		<h1 className="mt-5 text-danger">Planets</h1>
		<div className="mt-3 card-container">
			<div className="card" style={{minWidth: "400px",width: "400px"}}>
				<img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Name</h5>
					<p className="card-text mb-0">Population:</p>
					<p className="card-text">Terrain:</p>
					<div className="d-flex justify-content-between">
						<Link to="/learn-more-page" className="btn btn-outline-primary">Learn more!</Link>
						<button className="btn btn-outline-warning" onClick={handleHeartClick}>
							<i className={`fa-heart ${isFavorite ? 'fas' : 'far'}`}></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	);

};