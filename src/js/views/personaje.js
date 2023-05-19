import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personaje = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const idNumber = parseInt(params.theid);
	console.log(idNumber, "<<<<<<<< Esto")
	
		
	return (
		<div className="jumbotron position-relative container ">
			<figure class="figure row justify-content-center">
				<figcaption className="figure-caption text-warning fs-1 text-center">Name: {store.characters[params.theid].name}</figcaption>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${idNumber + 1}.jpg`} class="figure-img img-fluid rounded col-5" alt="..." />
				<div className="text-warning col-3">
					<br></br>
					<br></br>
					Height: {store.characters[params.theid].height}
					<br></br>
					<br></br>
					Mass: {store.characters[params.theid].mass}
					<br></br>
					<br></br>
					Hair Color: {store.characters[params.theid].hair_color}
					<br></br>
					<br></br>
					Skin Color: {store.characters[params.theid].skin_color}
					<br></br>
					<br></br>
					Gender: {store.characters[params.theid].gender}
					<br></br>
					<br></br>
					Eye Color: {store.characters[params.theid].eye_color}
					<br></br>
					<br></br>
				
				</div>
			</figure>
			<h1 className="display-4">This will show the demo element: {store.characters[params.theid].name}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
		

	);
};


Personaje.propTypes = {
	match: PropTypes.object
};