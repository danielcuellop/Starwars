import React, { useEffect, useState } from "react";
import "../../styles/home.css";

export const Home = () => {
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/planets/")
			.then(response => response.json())
			.then(data => setPlanets(data.results))
			.catch(error => console.error(error));
	}, []);



	return (
		<div class="accordion" id="accordionExample">
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingOne">
				<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					Accordion Item #1
				</button>
			</h2>
			<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
				<div class="accordion-body">
				<div className="container">
			<div className="card-container row">
				{planets.map((planet, index) => (
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
					</div>
				))}
			</div>
		</div>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingTwo">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					Accordion Item #2
				</button>
			</h2>
			<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
				<div class="accordion-body">
					<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingThree">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					Accordion Item #3
				</button>
			</h2>
			<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div class="accordion-body">
					<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
				</div>
			</div>
		</div>
	</div>



		
	);
};
