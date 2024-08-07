import { useState, useContext, useEffect } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Planet = () => {
    const {uid} = useParams();
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        actions.getPlanet(uid)
        .then((fetchedPlanet) => setPlanet(fetchedPlanet))
        .catch(error => console.error("Error fetching planet:", error));
    }, [uid, actions]);

    // Function to get the photo URL
    const getPhotoUrl = (uid) => `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;

    // Placeholder image URL
    const placeholderImage = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
	
	return (
        <div className="mt-5 container">
        {planet ? (
            <div className="row">
                <div key={planet.uid} className="col d-flex mb-3">
                    <img 
                                src={getPhotoUrl(uid)}
                                className="ps-5 pe-5"
                                alt={planet.name} 
                                onError={(e) => e.target.src = placeholderImage} // Set placeholder on error
                                style={{maxWidth: "500px",width: "500px"}}
                            />
                <div className="col d-flex mb-3">
                    <div className="text-center me-5">
                        <h5>{planet.name}</h5>
                        <p>{planet.description}</p>
                        <p>Enim proident esse dolore ullamco ipsum. Commodo incididunt mollit ex occaecat deserunt irure est ex anim et consequat. Voluptate esse id adipisicing dolore anim et in. Eiusmod laboris quis nostrud consectetur incididunt nostrud sit id cillum adipisicing.
                            Enim proident esse dolore ullamco ipsum. Commodo incididunt mollit ex occaecat deserunt irure est ex anim et consequat. Voluptate esse id adipisicing dolore anim et in. Eiusmod laboris quis nostrud consectetur incididunt nostrud sit id cillum adipisicing.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-4 text-center border-top border-danger pt-5">
                <div className="col">
                    <p className="text-danger fw-bold">Population:</p>
                    <p className="text-danger">{planet.population}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Terrain:</p>
                    <p className="text-danger">{planet.terrain}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Rotational Period:</p>
                    <p className="text-danger">{planet.rotation_period}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Diameter:</p>
                    <p className="text-danger">{planet.diameter}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Climate:</p>
                    <p className="text-danger">{planet.climate}</p>
                </div>
                <div className="col">
                    <p className="text-danger fw-bold">Orbital Period:</p>
                    <p className="text-danger">{planet.orbital_period}</p>
                </div>
            </div>
            <div className="row">
                <div className="d-flex">
                    <Link to="/" className="btn btn-primary">Go back</Link>
                </div>
            </div>
            </div>
        ) : (
        <p>Loading planet...</p>
        )}
        </div>
	);

};