import { useState, useContext, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacters();
    }, [actions]);

    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const toggleHeart = (cardTitle) => {
        setIsHeartFilled(!isHeartFilled);
        actions.setFavorite(cardTitle); // Add the card title to favorites
    };
	
	return (
        <div className="mt-3 me-4 card-container">
        {store.people && store.people.length > 0 ? (
                store.people.map((person) => (
            <div key={person.uid} className="card me-3" style={{minWidth: "400px",width: "400px"}}>
                <img src="https://picsum.photos/400/200" className="card-img-top" alt={person.name} />
                <div className="card-body">
                    <h5 className="card-title mb-3">{person.name}</h5>
                    <p className="card-text mb-0">Gender: {person.gender}</p>
                    <p className="card-text mb-0">Hair Color: {person.hair_color}</p>
                    <p className="card-text">Eye Color: {person.eye_color}</p>
                    <div className="d-flex justify-content-between">
                        <Link to="#" className="btn btn-outline-primary">Learn more!</Link>
						<button className="btn btn-outline-warning" onClick={() => toggleHeart(person.name)}>
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