import React, {FunctionComponent} from 'react';
import './ItemLists.css'
import {PersonType} from '../../services/swapi-services';
import {v1} from 'uuid'


type ItemListPropsType = {
  onPersonSelected: (id: string) => void
  items: Array<PersonType>
  renderItem?: any
}
const ItemList: FunctionComponent<ItemListPropsType> = ({onPersonSelected, renderItem, items}) => {

  const ItemsList = items.map(el => {
    const {id} = el
    const label = renderItem(el)
    return <li key={v1()} className="list-group-item"
               onClick={() => onPersonSelected(id)}>{label}</li>
  })
  return (
      <div>
        <ul className="item-list list-group">
          {ItemsList}
        </ul>
      </div>
  );
};

export default ItemList;
