import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/Characters";
import { Starships } from "../component/Starships";
import { Planets } from "../component/Planets";

export const Home = () => {
	
	return (
	<div className="ms-5">
		<h1 className="mt-5 text-danger">Characters</h1>
		< Characters />
		<h1 className="mt-5 text-danger">Starships</h1>
		< Starships />
		<h1 className="mt-5 text-danger">Planets</h1>
		< Planets />
	</div>
	);
	
};