import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"

export const Home = () => {
	const [planets, setPlanets] = useState([]);
	const { store, actions } = useContext(Context)
	const [characters, setCharacters] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	console.log(store.planets, "planets")
	console.log(store.characters, "characters")
	console.log(store.vehicles, "Vehicles")

	return (
		<div className="accordion" id="accordionExample">
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingOne">
					<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						Planetas
					</button>
				</h2>
				<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<div className="accordion-body">
						<div className="container">
							<div className="card-container row">
								{store.planets.map((planet, index) => (
									<div key={index} className="card col-4 ">
										<h2>{planet.name}</h2>
										<img
											src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
											alt={planet.name} width="250"
										/>
										<p>Population: {planet.population}</p>
										<p>Climate: {planet.climate}</p>
										<p>Gravity: {planet.gravity}</p>
										<p>Terrain: {planet.terrain}</p>
										<div>
											<button type="button" className="btn btn-outline-primary btn-sm w-20px">Primary</button>
											<button type="button" className="btn btn-outline-warning">Warning</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingTwo">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Personajes
					</button>
				</h2>
				<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
					<div className="accordion-body">
						<div className="card-container">
							<div className="card-container row">
								{store.characters.map((character, index) => (
									<div key={index} className="card col-4">
										<h2>{character.name}</h2>
										<img
											src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
											alt={character.name}
										/>
										<p>Birth Year: {character.birth_year}</p>
										<p>Gender: {character.gender}</p>
										<p>Height: {character.height}</p>
										<p>Mass: {character.mass}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingThree">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Vehiculos
					</button>
				</h2>
				<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
					<div className="accordion-body">
						<div className="card-container">
							<div className="card-container row">
								{store.vehicles.map((vehicle, index) => (
									<div key={index} className="card col-4">
										<h2>{vehicle.name}</h2>
										<img
											src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`}
											alt={vehicle.name}
										/>
										<p>Model: {vehicle.model}</p>
										<p>Manofacturer: {vehicle.manufacturer}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
		
		
			</div >
		</div >




	);
};
