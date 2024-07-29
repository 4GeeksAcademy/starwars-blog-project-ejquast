import { useContext, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Characters = () => {
    // const { store, actions } = useContext(Context);
	
	return (
    <div className="mt-3 card-container">
        <div className="card" style={{minWidth: "400px",width: "400px"}}>
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-3">Name</h5>
                <p className="card-text mb-0">Gender:</p>
                <p className="card-text mb-0">Hair Color:</p>
                <p className="card-text">Eye Color:</p>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                    <a href="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></a>
                </div>
            </div>
        </div>
    </div>
	);

};