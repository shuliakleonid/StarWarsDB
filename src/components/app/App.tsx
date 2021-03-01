import React, {useState} from 'react';

import Header from '../header/Header';
import RandomPlanet from '../random-planet/RandomPlanet';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';

function App() {
const [personSelected,setPersonSelected]=useState('1')
  const onPersonSelected=(id:string)=>{
    setPersonSelected(id)
  }

  return (
      <div>
        <Header/>
        <RandomPlanet/>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonSelected={onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personSelected={personSelected}/>
          </div>
        </div>
      </div>
  )
}

export default App;
