import { useState, useContext, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Planet } from "../views/Planet";

export const Planets = () => {
    const { store, actions } = useContext(Context);
	const [hearts, setHearts] = useState({}); // Object to track heart statuses

	useEffect(() => {
        actions.getPlanets();
    }, [actions]);

	useEffect(() => {
        // Initialize hearts state based on the favorites in store
        const initialHearts = store.favorites.reduce((acc, item) => {
            acc[item.uid] = true;
            return acc;
        }, {});
        setHearts(initialHearts);
    }, [store.favorites]);

    const toggleHeart = (uid) => {
        const isFavorite = !hearts[uid];
        if (isFavorite) {
            actions.setFavorite("planets", uid); // Add to favorites
        } else {
            actions.removeFavorite(uid); // Remove from favorites
        }
        setHearts((prevHearts) => ({
            ...prevHearts,
            [uid]: isFavorite,
        }));
    };

	// Function to get the photo URL
    const getPhotoUrl = (uid) => `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;

	// Placeholder image URL
    const placeholderImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
	
	return (
        <div className="mt-3 me-4 card-container">
		{store.planets && store.planets.length > 0 ? (
                store.planets.map((planet) => (
			<div key={planet.uid} className="card me-3" style={{minWidth: "400px",width: "400px"}}>
				<img 
                            src={getPhotoUrl(planet.uid)} 
                            className="card-img-top" 
                            alt={planet.name} 
                            onError={(e) => e.target.src = placeholderImage} // Set placeholder on error
                            style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }} 
                        />
				<div className="card-body">
					<h5 className="card-title mb-3">{planet.name}</h5>
					<p className="card-text mb-0">Population: {planet.population}</p>
					<p className="card-text">Terrain: {planet.terrain}</p>
					<div className="d-flex justify-content-between">
						<Link to={`/planet/${planet.uid}`} className="btn btn-outline-primary">Learn more!</Link>
						<button className="btn btn-outline-warning" onClick={() => toggleHeart(planet.uid)}>
							<i className={hearts[planet.uid] ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
						</button>
					</div>
				</div>
			</div>
		))
		) : (
		<p>Loading planets...</p>
		)}
		</div>
	);

};