import React, {useEffect, useState} from 'react';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import SwapiServiceClass, {PersonType} from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';

const StarshipPage = () => {

  const [starshipList, setStarshipList] = useState<any | null>(null)
  const [starship, setStarship] = useState<any | null>(null)
  const [starshipSelected, setStarshipSelected] = useState('1')
  const onPersonSelected = (id: string) => {
    setStarshipSelected(id)
  }

  useEffect(() => {
    const swapiService = new SwapiServiceClass()
    swapiService.getAllStarShips()
        .then((response) => setStarshipList(response))//получаем список кораблей

    swapiService.getStarship(starshipSelected)//получаем необходимого кораблей
        .then((starshipId) => setStarship(starshipId))

  }, [starshipSelected])
  console.log(starship,'starship')
  console.log(starshipSelected)
  return (
      <div className="row mb2 ">
        <div className="col-md-6 mt-3">
          {starshipList === null
              ? <Spinner/>
              : <ItemList items={starshipList} onPersonSelected={onPersonSelected}/>
          }
        </div>
        <div className="col-md-6">
          {starship === null
              ? <Spinner/>
              : <PersonDetails item={starship} />
          }
        </div>
      </div>
  );
};

export default StarshipPage;
