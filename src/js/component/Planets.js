import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Planets = () => {
    // const { store, actions } = useContext(Context);
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const toggleHeart = () => {
        setIsHeartFilled(!isHeartFilled);
    };
	
	return (
        <div className="mt-3 card-container">
			<div className="card" style={{minWidth: "400px",width: "400px"}}>
				<img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Name</h5>
					<p className="card-text mb-0">Population:</p>
					<p className="card-text">Terrain:</p>
					<div className="d-flex justify-content-between">
						<Link to="#" className="btn btn-outline-primary">Learn more!</Link>
						<button className="btn btn-outline-warning" onClick={toggleHeart}>
							<i className={isHeartFilled ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);

};