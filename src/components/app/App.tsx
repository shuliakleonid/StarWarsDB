import React from 'react';
import Header from '../header/Header';
import RandomPlanet from '../random-planet/RandomPlanet';
import PeoplePage from '../people-page/PeoplePage';
import PlanetPage from '../planet-details/PlanetPage';
import StarshipPage from '../starship-page/StarshipPage';
import ErrorBoundry from '../error-boundary/ErrorBoundary';
import {Switch,Route} from 'react-router-dom';

function App() {

  return (
      <div>
        <Header/>
        <RandomPlanet/>
        <Switch>
          <Route exact path='/' render={()=><h2>Welcome to StarDB</h2>}/>
            <Route path='/people'  component={PeoplePage}/>
            {/*<PeoplePage/>*/}
            <Route path='/planets'  component={PlanetPage}/>
            {/*<PlanetPage/>*/}
            <Route path='/starships'  component={StarshipPage}/>
            {/*<StarshipPage/>*/}
        </Switch>
      </div>
  )
}

export default App;
