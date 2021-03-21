import React, {useEffect, useState} from 'react';
import ItemList from '../item-list/ItemList';
import ItemDetails from '../item-details/ItemDetails';
import SwapiServiceClass from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';
import Record from '../record/Record';

const StarshipPage = () => {
  const [starshipList, setStarshipList] = useState<any | null>(null)
  const [starship, setStarship] = useState<any | null>(null)
  const [starshipSelected, setStarshipSelected] = useState('5')
  const [imageUrl, getImageUrl] = useState('')
  const onPersonSelected = (id: string) => {
    setStarshipSelected(id)
  }

  useEffect(() => {
    const swapiService = new SwapiServiceClass()
    const {getStarshipImage} = swapiService
    swapiService.getAllStarShips()
        .then((response) => setStarshipList(response))
    swapiService.getStarship(starshipSelected)
        .then((starshipId) => {
          setStarship(starshipId)
          getImageUrl(getStarshipImage(starshipId.id))
        })
  }, [starshipSelected])

  return (
      <div className="row mb2 ">
        <div className="col-md-6 mt-3">
          {starshipList === null
              ? <Spinner/>
              : <ItemList items={starshipList} onPersonSelected={onPersonSelected}>
                {(item: { name: string }) =>
                    `${item.name}`}
              </ItemList>
          }
        </div>

        <div className="col-md-6">
          {starship === null
              ? <Spinner/>
              : <ItemDetails item={starship} imageUrl={imageUrl}>
                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='passengers' label='Passengers'/>
              </ItemDetails>
          }
        </div>
      </div>
  );
};


export default StarshipPage;
