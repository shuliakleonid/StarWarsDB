import React, {FunctionComponent, ReactChild, ReactFragment, ReactNode, ReactPortal} from 'react';
import './ItemLists.css'
import {PersonType} from '../../services/swapi-services';
import {v1} from 'uuid'


type ItemListPropsType = {
  onPersonSelected: (id: string) => void
  items: Array<PersonType>
  renderItem?: any,

}
const ItemList: FunctionComponent<ItemListPropsType> = ({items,onPersonSelected,children}) => {

  const ItemsList = items.map(el => {
    const {id} = el


    // @ts-ignore
    const label = children(el)
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
