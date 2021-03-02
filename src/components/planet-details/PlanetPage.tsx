import React, {useEffect, useState} from 'react';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import SwapiServiceClass from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';

const PlanetPage = () => {

  const [planetList, setPlanetList] = useState<any | null>(null)
  const [planet, setPlanet] = useState<any | null>(null)
  const [planetSelected, setPlanetSelected] = useState('1')
  const onPersonSelected = (id: string) => {
    setPlanetSelected(id)
  }

  useEffect(() => {
    debugger
    const swapiService = new SwapiServiceClass()
    swapiService.getAllPlanets()
        .then((response) => setPlanetList(response))//получаем список планет

    swapiService.getPlanet(planetSelected)//получаем необходимого планеты
        .then((planetId) => setPlanet(planetId))

  }, [planetSelected])
  console.log(planet, 'person')
  console.log(planetSelected)
  return (
      <div className="row mb2 ">
        <div className="col-md-6 mt-3">
          {planetList === null
              ? <Spinner/>
              : <ItemList items={planetList}
                          renderItem={(item: { name: string; })=>`${item.name}`}
                          onPersonSelected={onPersonSelected} children={null}/>
          }
        </div>
        <div className="col-md-6">
          {planet === null
              ? <Spinner/>
              : <PersonDetails item={planet}
              //renderItemPlanet={({name,diameter,population,rotationPeriod}=>`${name}(${diameter}${population}${rotationPeriod})`)}
              />
          }
        </div>
      </div>
  );
};

export default PlanetPage;
