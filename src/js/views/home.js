import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";
import { Favorites, favorites } from "../component/navbar";


export const Home = () => {
	const [planets, setPlanets] = useState([]);
	const { store, actions } = useContext(Context)
	const [characters, setCharacters] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [favorites, setFavorites] = useState([]);

	console.log(store.planets, "planets")
	console.log(store.characters, "characters")
	console.log(store.vehicles, "Vehicles")

	function addFavorite(item) {
		// Crear una copia del estado de favoritos actual
		let newFavorites = [...favorites];
	  
		// Añadir el nuevo ítem
		newFavorites.push(item);
	  
		// Actualizar el estado
		setFavorites(newFavorites);
	  }
	  
	return (
		<div style={{ maxHeight: '70vh', overflowY: 'scroll' }}>
		<div className="accordion bg-dark text-warning" id="accordionExample">
			<div className="accordion-item bg-dark text-warning">
				<h2 className="accordion-header bg-dark text-warning container" id="headingOne">
					<button className="accordion-button bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
						Planetas
					</button>
				</h2>
				<div id="collapseOne" className="accordion-collapse collapse  container-fluid bg-dark" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<div className="accordion-body bg-dark">
						<div className="container">
						<div className="card-container row bg-dark text-warning justify-content-center">
								{store.planets.map((planet, index) => (
									<div key={index} className="card col-2 m-3 heigth-200 bg-dark border border-warning">
										<h2>{planet.name}</h2>
										<img
											src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
											alt={planet.name} width="200"
										/>

										<p>Poblacion: {planet.population}</p>
										<p>Clima: {planet.climate}</p>
										<p>Gravedad: {planet.gravity}</p>
										<p>Terreno: {planet.terrain}</p>
										<br></br>
										<div>
											<Link to={"/single/" + index}>
												<span className="position-absolute bottom-0 start-0 m-1">Learn More!</span>
											</Link>
											
											<button type="button" className="btn btn-outline-warning position-absolute bottom-0 end-0" onClick={e => actions.agregarFavoritos(index,"planets")}>♡</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<div className="accordion-item bg-dark">
				<h2 className="accordion-header container" id="headingTwo">
					<button className="accordion-button collapsed text-warning bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Personajes 
					</button>
				</h2>
				<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
				<div className="accordion-body bg-dark">
						<div className="container">
							<div className="card-container row bg-dark text-warning">
								{store.characters.map((character, index) => (
									<div key={index} className="card col-2 m-3 heigth-180 bg-dark border border-warning">
										<h2>{character.name}</h2>
										<img
											src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
											alt={character.name} width="200"
										/>
										<p>Birth Year: {character.birth_year}</p>
										<p>Gender: {character.gender}</p>
										<p>Height: {character.height}</p>
										<p>Mass: {character.mass}</p>
										<br></br>
										<div>
											<Link to={"/personaje/" + index}>
												<span className="position-absolute bottom-0 start-0 m-1">Learn More!</span>
											</Link>
											<button type="button" className="btn btn-outline-warning position-absolute bottom-0 end-0" onClick={e => actions.agregarFavoritos(index,"characters")}>♡</button>

										</div>
									</div>
								))}  
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="accordion-item bg-dark">
				<h2 className="accordion-header container" id="headingThree">
					<button className="accordion-button collapsed text-warning bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Vehiculos
					</button>
				</h2>
				<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body bg-dark">
						<div className="container">
							<div className="card-container row bg-dark text-warning">
								{store.vehicles.map((vehicle, index) => (
									<div key={index} className="card col-2 m-3 heigth-200 bg-dark border border-warning">
										<h2>{vehicle.name}</h2>
										<img
											src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
											alt={vehicle.name} width="200"
										/>
										<p>Model: {vehicle.model}</p>
										<p>Manofacturer: {vehicle.manufacturer}</p>
										<br></br>
										<div>
											<Link to={"/vehicles/" + vehicle.uid}>
												<span className="position-absolute bottom-0 start-0 m-1">Learn More!</span>
											</Link>
											<button type="button" className="btn btn-outline-warning position-absolute bottom-0 end-0" onClick={e => actions.agregarFavoritos(index,"vehicles")}>♡</button>
										</div>
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
