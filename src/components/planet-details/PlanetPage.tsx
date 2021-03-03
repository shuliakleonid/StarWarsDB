import React, {useEffect, useState} from 'react';
import ItemList from '../item-list/ItemList';
import ItemDetails from '../item-details/ItemDetails';
import SwapiServiceClass from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';

const PlanetPage = () => {

  const [planetList, setPlanetList] = useState<any | null>(null)
  const [planet, setPlanet] = useState<any | null>(null)
  const [planetSelected, setPlanetSelected] = useState('1')
  const [imageUrl,getImageUrl]= useState('')
  const onPersonSelected = (id: string) => {
    setPlanetSelected(id)
  }

  useEffect(() => {

    const swapiService = new SwapiServiceClass()
    const {getPlanetImage}=swapiService
    swapiService.getAllPlanets()
        .then((response) => setPlanetList(response))//получаем список планет

    swapiService.getPlanet(planetSelected)//получаем необходимого планеты
        .then((planetId) => {
          // @ts-ignore
         return setPlanet(planetId),getImageUrl(getPlanetImage(planetId.id))
        })

  }, [planetSelected])
  // console.log(planet, 'person')
  // console.log(planetSelected)
  return (
      <div className="row mb2 ">
        {/*<div className="col-md-6 mt-3">*/}
        {/*  {planetList === null*/}
        {/*      ? <Spinner/>*/}
        {/*      : <ItemList items={planetList}*/}
        {/*                  renderItem={(item: { name: string; })=>`${item.name}`}*/}
        {/*                  onPersonSelected={onPersonSelected} children={null}/>*/}
        {/*  }*/}
        {/*</div>*/}
        {/*<div className="col-md-6">*/}
        {/*  {planet === null*/}
        {/*      ? <Spinner/>*/}
        {/*      : <ItemDetails item={planet} imageUrl={imageUrl}*/}
        {/*      //renderItemPlanet={({name,diameter,population,rotationPeriod}=>`${name}(${diameter}${population}${rotationPeriod})`)}*/}
        {/*      />*/}
        {/*  }*/}
        {/*</div>*/}
      </div>
  );
};

export default PlanetPage;
