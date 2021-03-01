import React, {FunctionComponent, useEffect, useState} from 'react';
import './PersonDetails.css'
import SwapiServiceClass, {PersonType} from '../../services/swapi-services';
import Spinner from '../spinner/Spinner';

type PersonDetailsTypeProps = {
  personSelected: string
}

const PersonDetails: FunctionComponent<PersonDetailsTypeProps> = ({personSelected}) => {
  const mock = {
    id: '1',
    name: 'Luke Skywalker',
    gender: 'male',
    birthYear: '19BBY',
    eyeColor: 'blue'
  }


  const [person, setPerson] = useState<PersonType>(mock)
const[loading,setLoading]=useState(true)

  useEffect(() => {
  const swapiService = new SwapiServiceClass()
    swapiService.getPerson(personSelected)
        .then((person) => setPerson(person))
    setLoading(false)
  }, [personSelected])

  const {id, name, gender, birthYear, eyeColor} = person


  return (

      <div className="person-details card">
        {loading
            ?<Spinner/>
            :<>
        <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
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
            </>
        }
      </div>

  );
};

export default PersonDetails;
