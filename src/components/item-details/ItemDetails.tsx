import React, {FunctionComponent} from 'react';
import './ItemDetails.css'
import {PersonType} from '../../services/swapi-services';
import ErrorButton from '../error-button/ErrorButton';

type ItemDetailsDetailsTypeProps = {
  renderItemPlanet?:any
  item: PersonType
  imageUrl:string
}

const ItemDetails: FunctionComponent<ItemDetailsDetailsTypeProps> = ({ item,imageUrl}) => {
  const {id, name, gender, birthYear, eyeColor} = item
  return (
      <div className="person-details card">
        <img className="person-image"
             src={imageUrl}
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
        <ErrorButton/>
      </div>
  );
};

export default ItemDetails;
