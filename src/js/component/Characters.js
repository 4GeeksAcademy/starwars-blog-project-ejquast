import { useState, useContext, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const [hearts, setHearts] = useState({}); // Object to track heart statuses

    useEffect(() => {
        actions.getCharacters();
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
            actions.setFavorite("people", uid); // Add to favorites
        } else {
            actions.removeFavorite(uid); // Remove from favorites
        }
        setHearts((prevHearts) => ({
            ...prevHearts,
            [uid]: isFavorite,
        }));
    };

    // Function to get the photo URL
    const getPhotoUrl = (uid) => `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

    // Placeholder image URL
    const placeholderImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
	
	return (
        <div className="mt-3 me-4 card-container">
        {store.people && store.people.length > 0 ? (
                store.people.map((person) => (
            <div key={person.uid} className="card me-3" style={{minWidth: "400px",width: "400px"}}>
                <img 
                            src={getPhotoUrl(person.uid)} 
                            className="card-img-top" 
                            alt={person.name} 
                            onError={(e) => e.target.src = placeholderImage} // Set placeholder on error
                            style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }} 
                        />
                <div className="card-body">
                    <h5 className="card-title mb-3">{person.name}</h5>
                    <p className="card-text mb-0">Gender: {person.gender}</p>
                    <p className="card-text mb-0">Hair Color: {person.hair_color}</p>
                    <p className="card-text">Eye Color: {person.eye_color}</p>
                    <div className="d-flex justify-content-between">
                        <Link to="#" className="btn btn-outline-primary">Learn more!</Link>
						<button className="btn btn-outline-warning" onClick={() => toggleHeart(person.uid)}>
							<i className={hearts[person.uid] ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
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