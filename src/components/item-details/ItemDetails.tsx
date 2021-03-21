import React, {FunctionComponent} from 'react';
import './ItemDetails.css'
import {PersonType} from '../../services/swapi-services';
import ErrorButton from '../error-button/ErrorButton';

type ItemDetailsDetailsTypeProps = {
  renderItemPlanet?: any
  item: PersonType
  imageUrl: string
}

const ItemDetails: FunctionComponent<ItemDetailsDetailsTypeProps> = ({item, imageUrl, children}) => {
  const {name} = item
  return (
      <div className="person-details card">
        <img alt='starWars' className="person-image"
             src={imageUrl}
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(children, (child) => {
              return React.cloneElement(child as React.ReactElement<any>, {item})
            })}
          </ul>
          <ErrorButton/>
        </div>
      </div>
  );
};

export default ItemDetails;
