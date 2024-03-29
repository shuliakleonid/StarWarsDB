import React, {useState} from 'react';
import Header from '../header/Header';
import RandomPlanet from '../random-planet/RandomPlanet';
import PeoplePage from '../people-page/PeoplePage';
import PlanetPage from '../planet-page/PlanetPage';
import StarshipPage from '../starship-page/StarshipPage';
import {Route, Switch} from 'react-router-dom';
import SecretPage from '../secret-page/SecretPage';
import LoginPage from '../login-page/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
      <div>
        <Header/>
        <RandomPlanet/>
        <Switch>
          <Route exact path='/' render={() => <h2>Welcome to StarDB</h2>}/>
          <Route path='/people' component={PeoplePage}/>
          <Route path='/planets/:id?' component={PlanetPage}/>
          <Route path='/starships' component={StarshipPage}/>
          <Route path='/secret' render={() => <SecretPage isLoggedIn={isLoggedIn}/>}/>
          <Route path='/login' render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={() => {
            setIsLoggedIn(!isLoggedIn)
          }}/>}/>
          <Route render={() => <h2>Page not Found!</h2>}/>
        </Switch>
      </div>
  )
}

export default App;
