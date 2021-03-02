import React, {FunctionComponent} from 'react';
import './ItemLists.css'
import {PersonType} from '../../services/swapi-services';
import {v1} from 'uuid'


type ItemListPropsType = {
  onPersonSelected: (id: string) => void
  peopleList: Array<PersonType>
}
const ItemList: FunctionComponent<ItemListPropsType> = ({onPersonSelected, peopleList}) => {

  let ItemListOfPeople = peopleList.map(el => <li key={v1()} className="list-group-item"
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
