import React, {useEffect, useState} from 'react';
import './RandomPlanet.css'
import SwapiServiceClass from '../../services/swapi-services';

export interface State {
  id: string | null
  name: string | null
  population: string | null
  rotationPeriod: string | null
  diameter: string | null
}

const RandomPlanet = () => {
  const state: State = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }

  const [dataOfPlanet, setDataOfPlanet] = useState<State>(state)
  useEffect(() => {
    const id = Math.floor(Math.random() * 15 + 2) + ''
    const swapiService = new SwapiServiceClass()
    swapiService.getPlanet(id)
        .then((planet) => {
              console.log(planet)
              return setDataOfPlanet({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotationPeriod,
                diameter: planet.diameter
              })
            }
        )

  }, [])


  return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${dataOfPlanet.id?dataOfPlanet.id:'5'}.jpg`}/>
        <div>
          <h4>{dataOfPlanet.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{dataOfPlanet.population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{dataOfPlanet.rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{dataOfPlanet.diameter}</span>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default RandomPlanet;
