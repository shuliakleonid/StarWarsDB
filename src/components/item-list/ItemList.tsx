import React, {FunctionComponent, useEffect, useState} from 'react';
import './ItemLists.css'
import SwapiServiceClass, {PersonType} from '../../services/swapi-services';
import {v1} from 'uuid'
import Spinner from '../spinner/Spinner';


// interface PeopleList{
//   birthYear: string
//   eyeColor: string
//   gender:string
//   id: string
//   name: string
// }

type ItemListPropsType = {
  onPersonSelected: (id: string) => void
}
const ItemList: FunctionComponent<ItemListPropsType> = ({onPersonSelected}) => {
  const [peopleList, setPeopleList] = useState<Array<PersonType> | null>(null)


  useEffect(() => {
    const swapiService = new SwapiServiceClass()

    swapiService.getAllPeople()
        .then((response) => setPeopleList(response))

  }, [])

  let ItemListOfPeople  = peopleList === null
                                            ? <Spinner/>
                                            : peopleList.map(el => <li key={v1()}                                                                                  className="list-group-item"
                                            onClick={() => onPersonSelected(el.id)}>{el.name}</li>)
  return (
      <div>
        <ul className="item-list list-group">
          {ItemListOfPeople}
        </ul>
      </div>
  );
};

export default ItemList;
