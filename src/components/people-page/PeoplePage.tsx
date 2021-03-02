import React, {useEffect, useState} from 'react';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import SwapiServiceClass, {PersonType} from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';

const PeoplePage = () => {

  const [peopleList, setPeopleList] = useState<Array<PersonType> | null>(null)
  const [person, setPerson] = useState<PersonType | null>(null)
  const [personSelected, setPersonSelected] = useState('1')
  const onPersonSelected = (id: string) => {
    setPersonSelected(id)
  }

  useEffect(() => {
    const swapiService = new SwapiServiceClass()
    swapiService.getAllPeople()
        .then((response) => setPeopleList(response))//получаем список персонажей

    swapiService.getPerson(personSelected)//получаем необходимого персонажа
        .then((personId) => setPerson(personId))

  }, [personSelected])
  // console.log(person,'person')
  // console.log(personSelected)

  return (
      <div className="row mb2 ">
        <div className="col-md-6 mt-3">
          {peopleList === null
              ? <Spinner/>
              : <ItemList items={peopleList}
                          renderItem={(item: { name: string; gender: string; birthYear: string; })=>`${item.name}(${item.gender},${item.birthYear})`}
                          onPersonSelected={onPersonSelected}/>
          }
        </div>
        <div className="col-md-6">
          {person === null
              ? <Spinner/>
              : <PersonDetails item={person} />
          }
        </div>
      </div>
  );
};

export default PeoplePage;
