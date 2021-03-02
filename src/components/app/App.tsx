import React from 'react';
import ErrorButton from '../error-button/ErrorButton';
import Header from '../header/Header';
import RandomPlanet from '../random-planet/RandomPlanet';
import PeoplePage from '../people-page/PeoplePage';
import PlanetPage from '../planet-details/PlanetPage';
import StarshipPage from '../starship-page/StarshipPage';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import ErrorBoundry from '../error-boundary/ErrorBoundary';

function App() {




  return (
      <div>
        <Header/>
        <RandomPlanet/>
          <ErrorButton/>
          <ErrorBoundry>
        <PeoplePage/>
          </ErrorBoundry>

        {/*<PlanetPage/>*/}
        {/*<StarshipPage/>*/}
      </div>
  )
}

export default App;
