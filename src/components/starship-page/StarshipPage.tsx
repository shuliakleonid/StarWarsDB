import React, {useEffect, useState} from 'react';
import ItemList from '../item-list/ItemList';
import ItemDetails from '../item-details/ItemDetails';
import SwapiServiceClass, {PersonType} from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';

const StarshipPage = () => {

  const [starshipList, setStarshipList] = useState<any | null>(null)
  const [starship, setStarship] = useState<any | null>(null)
  const [starshipSelected, setStarshipSelected] = useState('3')
  const [imageUrl,getImageUrl]= useState('')
  const onPersonSelected = (id: string) => {
    setStarshipSelected(id)
  }

  useEffect(() => {
    const swapiService = new SwapiServiceClass()
    const {getStarshipImage}=swapiService
    swapiService.getAllStarShips()
        .then((response) => setStarshipList(response))//получаем список кораблей
    swapiService.getStarship(starshipSelected)//получаем необходимого кораблей
        .then((starshipId) => {

        // @ts-ignore
          return  setStarship(starshipId),getImageUrl(getStarshipImage(starshipId.id))
        })

  }, [starshipSelected])
  return (
      <div className="row mb2 ">
        {/*<div className="col-md-6 mt-3">*/}
        {/*  {starshipList === null*/}
        {/*      ? <Spinner/>*/}
        {/*      : <ItemList items={starshipList} onPersonSelected={onPersonSelected} children={null}/>*/}
        {/*  }*/}
        {/*</div>*/}
        {/*<div className="col-md-6">*/}
        {/*  {starship === null*/}
        {/*      ? <Spinner/>*/}
        {/*      : <ItemDetails item={starship} imageUrl={imageUrl} />*/}
        {/*  }*/}
        {/*</div>*/}
      </div>
  );
};

export default StarshipPage;
