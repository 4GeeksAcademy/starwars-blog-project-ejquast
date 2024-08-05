import { useState, useContext, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Starships = () => {
    const { store, actions } = useContext(Context);
    const [hearts, setHearts] = useState({}); // Object to track heart statuses

    useEffect(() => {
        actions.getStarships();
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
            actions.setFavorite("starships", uid); // Add to favorites
        } else {
            actions.removeFavorite(uid); // Remove from favorites
        }
        setHearts((prevHearts) => ({
            ...prevHearts,
            [uid]: isFavorite,
        }));
    };

    // Function to get the photo URL
    const getPhotoUrl = (uid) => `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`;

    // Placeholder image URL
    const placeholderImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
	
	return (
        <div className="mt-3 me-4 card-container">
        {store.starships && store.starships.length > 0 ? (
                store.starships.map((starship) => (
            <div key={starship.uid} className="card me-3" style={{minWidth: "400px",width: "400px"}}>
                <img 
                            src={getPhotoUrl(starship.uid)} 
                            className="card-img-top" 
                            alt={starship.name} 
                            onError={(e) => e.target.src = placeholderImage} // Set placeholder on error
                            style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }} 
                        />
                <div className="card-body">
                    <h5 className="card-title mb-3">{starship.name}</h5>
                    <p className="card-text mb-0">Model: {starship.model}</p>
                    <p className="card-text mb-0">Class: {starship.starship_class}</p>
                    <p className="card-text">Speed: {starship.max_atmosphering_speed}</p>
                    <div className="d-flex justify-content-between">
                        <Link to="#" className="btn btn-outline-primary">Learn more!</Link>
						<button className="btn btn-outline-warning" onClick={() => toggleHeart(starship.uid)}>
							<i className={hearts[starship.uid] ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
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