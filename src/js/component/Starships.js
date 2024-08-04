import { useState, useContext, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Starships = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getStarships();
    }, [actions]);

    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const toggleHeart = (cardTitle) => {
        setIsHeartFilled(!isHeartFilled);
        actions.setFavorite(cardTitle); // Add the card title to favorites
    };
	
	return (
        <div className="mt-3 me-4 card-container">
        {store.starships && store.starships.length > 0 ? (
                store.starships.map((starship) => (
            <div key={starship.uid} className="card me-3" style={{minWidth: "400px",width: "400px"}}>
                <img src="https://picsum.photos/400/200" className="card-img-top" alt={starship.name} />
                <div className="card-body">
                    <h5 className="card-title">{starship.name}</h5>
                    <p className="card-text mb-0">Model: {starship.model}</p>
                    <p className="card-text mb-0">Class: {starship.starship_class}</p>
                    <p className="card-text">Speed: {starship.max_atmosphering_speed}</p>
                    <div className="d-flex justify-content-between">
                        <Link to="#" className="btn btn-outline-primary">Learn more!</Link>
						<button className="btn btn-outline-warning" onClick={() => toggleHeart(starship.name)}>
							<i className={isHeartFilled ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
						</button>
                    </div>
                </div>
            </div>
        ))
        ) : (
        <p>Loading characters...</p>
        )}
        </div>
	);

};