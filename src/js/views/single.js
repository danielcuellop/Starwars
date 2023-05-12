import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const idNumber = parseInt(params.theid);
	console.log(idNumber, "<<<<<<<< Esto")
	return (
		<div className="jumbotron position-relative container text-center">
			<figure className="figure row justify-content-center">
				<figcaption className="figure-caption text-warning fs-1">Planet:{store.planets[params.theid].name}</figcaption>
				<img src={`https://starwars-visualguide.com/assets/img/planets/${idNumber + 1}.jpg`} className="figure-img img-fluid rounded col-6" alt="..." />
				<div className="text-warning col-1">
				Cety:{store.planets[params.theid].population}
				</div>
			</figure>
			<h1 className="display-1 text-warning">This will show the demo element: </h1>
			<hr className="my-4" />

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
