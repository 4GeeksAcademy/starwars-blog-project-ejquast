import { useState, useContext, useEffect } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Character = () => {
    const {uid} = useParams();
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        actions.getCharacter(uid)
        .then((fetchedCharacter) => setCharacter(fetchedCharacter))
        .catch(error => console.error("Error fetching character:", error));
    }, [uid, actions]);

    // Function to get the photo URL
    const getPhotoUrl = (uid) => `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

    // Placeholder image URL
    const placeholderImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
	
	return (
        <div className="mt-5 container">
        {character ? (
            <div className="row">
                <div key={character.uid} className="col d-flex mb-3">
                    <img 
                                src={getPhotoUrl(uid)}
                                className="ps-5 pe-5"
                                alt={character.name} 
                                onError={(e) => e.target.src = placeholderImage} // Set placeholder on error
                                style={{maxWidth: "500px",width: "500px"}}
                            />
                <div className="col d-flex mb-3">
                    <div className="text-center pe-5">
                        <h5>{character.name}</h5>
                        <p>{character.description}</p>
                        <p>Enim proident esse dolore ullamco ipsum. Commodo incididunt mollit ex occaecat deserunt irure est ex anim et consequat. Voluptate esse id adipisicing dolore anim et in. Eiusmod laboris quis nostrud consectetur incididunt nostrud sit id cillum adipisicing.
                            Enim proident esse dolore ullamco ipsum. Commodo incididunt mollit ex occaecat deserunt irure est ex anim et consequat. Voluptate esse id adipisicing dolore anim et in. Eiusmod laboris quis nostrud consectetur incididunt nostrud sit id cillum adipisicing.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-4 text-center border-top border-danger pt-5">
                <div className="col">
                    <p className="text-danger fw-bold">Birth Year:</p>
                    <p className="text-danger">{character.birth_year}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Gender:</p>
                    <p className="text-danger">{character.gender}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Height:</p>
                    <p className="text-danger">{character.height}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Skin Color:</p>
                    <p className="text-danger">{character.skin_color}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Hair Color:</p>
                    <p className="text-danger">{character.hair_color}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Eye Color:</p>
                    <p className="text-danger">{character.eye_color}</p>
                </div>
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