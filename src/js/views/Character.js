import { useState, useContext, useEffect } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Character = () => {
    const {uid} = useParams();
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState(null);

    // useEffect(() => {
    //     actions.getCharacter(uid)
    //     .then((fetchedCharacter) => setCharacter(fetchedCharacter))
    //     .catch(error => console.error("Error fetching character:", error));
    // }, [uid, actions]);
    useEffect(() => {
        console.log("UID:", uid); // Debugging line to ensure UID is available
        if (uid) {
            actions.getCharacter(uid)
                .then((fetchedCharacter) => {
                    console.log("Fetched Character:", fetchedCharacter); // Debugging line to check fetched character data
                    if (fetchedCharacter) {
                        setCharacter(fetchedCharacter);
                    }
                })
                .catch(error => console.error("Error fetching  character:", error));
        }
    }, [uid, actions]);

    // Function to get the photo URL
    const getPhotoUrl = (uid) => `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;
    // const getPhotoUrl = (uid) => {
    //     if (!uid) {
    //         console.error("No UID provided for photo URL");
    //         return "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    //     } else {
    //     const url = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;
    //     console.log("Photo URL:", url); // Log URL for debugging
    //     return url;}
    // };

    // Placeholder image URL
    const placeholderImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
	
	return (
        <div className="mt-3 container">
        {character ? (
            <div className="row">
                <div key={character.uid} className="col d-flex">
                    <img 
                                src={getPhotoUrl(uid)}
                                className="card-img-top"
                                alt={character.name} 
                                onError={(e) => e.target.src = placeholderImage} // Set placeholder on error
                                style={{maxWidth: "600px",width: "600px"}}
                            />
                <div className="col">
                    <h5>{character.name}</h5>
                    <p>Placeholder Text</p>
                </div>
            </div>
            <div className="row">
                <p className="col">Birth Year: {character.birth_year}</p>
                <p className="col">Gender: {character.gender}</p>
                <p className="col">Height: {character.height}</p>
                <p className="col">Skin Color: {character.skin_color}</p>
                <p className="col">Hair Color: {character.hair_color}</p>
                <p className="col">Eye Color: {character.eye_color}</p>
            </div>
            <div className="row">
                <div className="d-flex">
                    <Link to="/" className="btn btn-primary">Go back</Link>
                </div>
            </div>
            </div>
        ) : (
        <p>Loading character...</p>
        )}
        </div>
	);

};