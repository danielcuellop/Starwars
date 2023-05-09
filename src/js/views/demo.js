import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.planets.map((planets, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<Link to={"/single/" + index}>
								<span>Link to: {planets.name}</span>
							</Link>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
