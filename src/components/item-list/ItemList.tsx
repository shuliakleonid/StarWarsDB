import React, {FunctionComponent, ReactChild, ReactFragment, ReactNode, ReactPortal} from 'react';
import './ItemLists.css'
import {PersonType} from '../../services/swapi-services';
import {v1} from 'uuid'


type ItemListPropsType = {
  onPersonSelected: (id: string) => void
  items: Array<PersonType>
  renderItem?: any,
  children?: ReactChild & ReactNode
}
const ItemList: FunctionComponent<ItemListPropsType> = (props) => {

  const ItemsList = props.items.map(el => {
    const {id} = el


    // @ts-ignore
    const label = props.children(el)
    return <li key={v1()} className="list-group-item"
               onClick={() => props.onPersonSelected(id)}>{label}</li>
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
