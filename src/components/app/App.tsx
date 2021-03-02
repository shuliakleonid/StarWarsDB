import React from 'react';
import ErrorButton from '../error-button/ErrorButton';
import Header from '../header/Header';
import RandomPlanet from '../random-planet/RandomPlanet';
import PeoplePage from '../people-page/PeoplePage';
import PlanetPage from '../planet-details/PlanetPage';
import StarshipPage from '../starship-page/StarshipPage';

function App() {




  return (
      <div>
        <Header/>
        <RandomPlanet/>
          <ErrorButton/>
        <PeoplePage/>
        <PlanetPage/>
        <StarshipPage/>
      </div>
  )
}

export default App;
