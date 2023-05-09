import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<figure class="figure">
				<img src={`https://starwars-visualguide.com/assets/img/planets/${store.planets[params.theid].index + 1}.jpg`} class="figure-img img-fluid rounded" alt="..."/>
					<figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
			</figure>
			<h1 className="display-4">This will show the demo element: {store.planets[params.theid].population}</h1>

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
