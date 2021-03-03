import React, {useEffect, useState} from 'react';
import ItemList from '../item-list/ItemList';
import ItemDetails from '../item-details/ItemDetails';
import SwapiServiceClass, {PersonType} from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';
import Record from '../record/Record';

const PeoplePage = () => {

  const [peopleList, setPeopleList] = useState<Array<PersonType> | null>(null)
  const [person, setPerson] = useState<PersonType | null>(null)
  const [personSelected, setPersonSelected] = useState('1')

  const [imageUrl,getImageUrl]= useState('')
  const onPersonSelected = (id: string) => {
    setPersonSelected(id)
  }

  useEffect(() => {
    const swapiService = new SwapiServiceClass()
    const {getPersonImage}=swapiService
    swapiService.getAllPeople()
        .then((response) => setPeopleList(response))//получаем список персонажей

    swapiService.getPerson(personSelected)//получаем необходимого персонажа
        .then((personId) => {
          debugger
          // @ts-ignore
          return setPerson(personId), getImageUrl(getPersonImage(personId.id))
        })

  }, [personSelected])


  return (
      <div className="row mb2 ">
        {/*<div className="col-md-6 mt-3">*/}
        {/*  {peopleList === null*/}
        {/*      ? <Spinner/>*/}
        {/*      : <ItemList items={peopleList}*/}
        {/*                  // renderItem={(item: { name: string; gender: string; birthYear: string; }) =>*/}
        {/*                  //     `${item.name}(${item.gender},${item.birthYear})`}*/}
        {/*                  onPersonSelected={onPersonSelected}>*/}
        {/*        /!*{(item: { name: string; gender: string; birthYear: string; }) =>*!/*/}
        {/*        /!*  `${item.name}(${item.gender},${item.birthYear})`}*!/*/}
        {/*      </ItemList>*/}
        {/*  }*/}
        {/*</div>*/}
        <div className="col-md-6">
          {person === null
              ? <Spinner/>
              : <ItemDetails item={person} imageUrl={imageUrl} >
                <Record field = 'gender' label='Gender'/>
                <Record field = 'gender' label='Gender'/>

              </ItemDetails>
          }
        </div>
      </div>
  );
};

export default PeoplePage;
