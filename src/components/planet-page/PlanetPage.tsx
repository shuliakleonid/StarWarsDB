import React, {useEffect, useState} from 'react';
import ItemList from '../item-list/ItemList';
import ItemDetails from '../item-details/ItemDetails';
import SwapiServiceClass from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';
import Record from '../record/Record';

const PlanetPage = () => {

  const [planetList, setPlanetList] = useState<any | null>(null)
  const [planet, setPlanet] = useState<any | null>(null)
  const [planetSelected, setPlanetSelected] = useState('15')
  const [imageUrl, getImageUrl] = useState<string>('')
  const onPersonSelected = (id: string) => {
    setPlanetSelected(id)
  }

  useEffect(() => {

    const swapiService = new SwapiServiceClass()
    const {getPlanetImage} = swapiService
    swapiService.getAllPlanets()
        .then((response) => setPlanetList(response))
    swapiService.getPlanet(planetSelected)
        .then((planetId) => {
          setPlanet(planetId)
          getImageUrl(getPlanetImage(planetId.id))
        })

  }, [planetSelected])

  return (
      <div className="row mb2 ">
        <div className="col-md-6 mt-3">
          {planetList === null
              ? <Spinner/>
              : <ItemList items={planetList}
                          renderItem={(item: { name: string; }) => `${item.name}`}
                          onPersonSelected={onPersonSelected}>
                {(item: { name: string }) =>
                    `${item.name}`}
              </ItemList>
          }
        </div>
        <div className="col-md-6">
          {planet === null
              ? <Spinner/>
              : <ItemDetails item={planet} imageUrl={imageUrl}>
                <Record field='population' label='Population'/>
                <Record field='rotationPeriod' label='Rotation Period'/>
              </ItemDetails>
          }
        </div>
      </div>
  );
};

export default PlanetPage;
