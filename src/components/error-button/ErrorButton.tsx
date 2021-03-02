import React, {useState} from 'react';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

const ErrorButton = () => {
  const [error, setError] = useState<boolean>(false)
if(error){
  //@ts-ignore
  foo.bar=0
}
  return  <button
          className="error-button btn btn-danger btn-lg"
          onClick={() => setError(true)}>
        Throw Error
      </button>


};

export default ErrorButton;


