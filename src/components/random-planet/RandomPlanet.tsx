import React, {useEffect, useState} from 'react';
import './RandomPlanet.css'
import SwapiServiceClass from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import {clearInterval} from 'timers';

export interface PlanetType {
  id: string | null
  name: string | null
  population: string | null
  rotationPeriod: string | null
  diameter: string | null,
}

export interface StateType {
  planet: PlanetType
  loading: boolean
}

const RandomPlanet = () => {
  const state: StateType = {
    planet: {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
    },
    loading: true
  }

  const [dataOfPlanet, setDataOfPlanet] = useState<PlanetType>(state.planet)
  const [loading, setLoading] = useState<boolean>(state.loading)
  const [error, setError] = useState<boolean>(false)
  useEffect(() => {
    let interval = setInterval(() => {
      const id = Math.floor(Math.random() * 15 + 2) + ''
      const swapiService = new SwapiServiceClass()
      swapiService.getPlanet(id)
          .then((planet) => {

                setDataOfPlanet({
                  id,
                  name: planet.name,
                  population: planet.population,
                  rotationPeriod: planet.rotationPeriod,
                  diameter: planet.diameter
                })
                setLoading(false)
              }
          ).catch((err) => setError(true))

    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
      error ? <ErrorIndicator/>
          : <div className="random-planet jumbotron rounded">
            {loading
                ? <Spinner/>
                : <>
                  <img alt='Planet' className="planet-image"
                       src={`https://starwars-visualguide.com/assets/img/planets/${dataOfPlanet.id ? dataOfPlanet.id : '5'}.jpg`}/>
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
                </>}
          </div>
  );
};

export default RandomPlanet;
