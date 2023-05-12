import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const idNumber = parseInt(params.uid);
	console.log(idNumber, "<<<<<<<< Esto")
	return (
		<div className="jumbotron">
			<figure class="figure">
				<img src={`https://starwars-visualguide.com/assets/img/vehicles/${idNumber}.jpg`} class="figure-img img-fluid rounded" alt="..." />
				<figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
			</figure>
			<h1 className="display-4">This will show the demo element: {store.vehicles[params.uid].model}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
		

	);
};

Vehicles.propTypes = {
	match: PropTypes.object
};