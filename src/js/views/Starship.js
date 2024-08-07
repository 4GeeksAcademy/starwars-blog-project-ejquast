import { useState, useContext, useEffect } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Starship = () => {
    const {uid} = useParams();
    const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        actions.getStarship(uid)
        .then((fetchedStarship) => setStarship(fetchedStarship))
        .catch(error => console.error("Error fetching starship:", error));
    }, [uid, actions]);

    // Function to get the photo URL
    const getPhotoUrl = (uid) => `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`;

    // Placeholder image URL
    const placeholderImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
	
	return (
        <div className="mt-5 container">
        {starship ? (
            <div className="row">
                <div key={starship.uid} className="col d-flex mb-3">
                    <img 
                                src={getPhotoUrl(uid)}
                                className="ps-5 pe-5"
                                alt={starship.name} 
                                onError={(e) => e.target.src = placeholderImage} // Set placeholder on error
                                style={{maxWidth: "500px",width: "500px"}}
                            />
                <div className="col d-flex mb-3">
                    <div className="text-center me-5">
                        <h5>{starship.name}</h5>
                        <p>{starship.description}</p>
                        <p>Enim proident esse dolore ullamco ipsum. Commodo incididunt mollit ex occaecat deserunt irure est ex anim et consequat. Voluptate esse id adipisicing dolore anim et in. Eiusmod laboris quis nostrud consectetur incididunt nostrud sit id cillum adipisicing.
                            Enim proident esse dolore ullamco ipsum. Commodo incididunt mollit ex occaecat deserunt irure est ex anim et consequat. Voluptate esse id adipisicing dolore anim et in. Eiusmod laboris quis nostrud consectetur incididunt nostrud sit id cillum adipisicing.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-4 text-center border-top border-danger pt-5">
                <div className="col">
                    <p className="text-danger fw-bold">Model:</p>
                    <p className="text-danger">{starship.model}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Class:</p>
                    <p className="text-danger">{starship.starship_class}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Speed:</p>
                    <p className="text-danger">{starship.max_atmosphering_speed}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Manufacturer:</p>
                    <p className="text-danger">{starship.manufacturer}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Length:</p>
                    <p className="text-danger">{starship.length}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Passengers:</p>
                    <p className="text-danger">{starship.passengers}</p>
                </div>
            </div>
            <div className="row">
                <div className="d-flex">
                    <Link to="/" className="btn btn-primary">Go back</Link>
                </div>
            </div>
            </div>
        ) : (
        <p>Loading starship...</p>
        )}
        </div>
	);

};