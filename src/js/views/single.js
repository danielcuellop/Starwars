import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const idNumber = parseInt(params.theid);
	console.log(idNumber, "<<<<<<<< Esto")

	loadpersonaje: () => {
		fetch("https://swapi.tech/api/planets/idNumber")
			.then(response => response.json())
			.then(data => setStore({ planets: data.results }))
			.catch(error => console.error(error));};
			console.log(store.characters, "ue hay")
	return (
		<div className="jumbotron position-relative container ">
			<figure className="figure row justify-content-center">
				<figcaption className="figure-caption text-warning fs-1 text-center">Planet: {store.planets[params.theid].name}</figcaption>
				<br></br>
				<img src={`https://starwars-visualguide.com/assets/img/planets/${idNumber + 1}.jpg`} className="figure-img img-fluid rounded col-7" alt="..." />
				<div className="text-warning col-3">
					<br></br>
					<br></br>
					Climate: {store.planets[params.theid].climate}
					<br></br>
					<br></br>
					Created: {store.planets[params.theid].created}
					<br></br>
					<br></br>
					Diameter: {store.planets[params.theid].diameter}
					<br></br>
					<br></br>
					Edited: {store.planets[params.theid].edited}
					<br></br>
					<br></br>
					Gravity: {store.planets[params.theid].gravity}
					<br></br>
					<br></br>
					Orbita Period: {store.planets[params.theid].orbital_period}
					<br></br>
					<br></br>
					Population: {store.planets[params.theid].population}
					<br></br>
					<br></br>
					Rotation Period: {store.planets[params.theid].rotation_period}
					<br></br>
					<br></br>
					Surface Water: {store.planets[params.theid].surface_water}
					<br></br>
					<br></br>
					Terrain: {store.planets[params.theid].terrain}
		
				</div>
			</figure>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>


	);
};

Single.propTypes = {
	match: PropTypes.object
};
