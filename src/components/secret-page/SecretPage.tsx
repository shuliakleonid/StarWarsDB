import React from 'react';
import {Redirect} from  'react-router-dom'

type SecretPagePropsType = {
  isLoggedIn:boolean
}
const SecretPage: React.FC<SecretPagePropsType> = ({isLoggedIn}) => {

  return (
      isLoggedIn
          ? <div className='jumbotron text-center'>
            <h3>This page is full of secrets!!!</h3>
          </div>
          : <Redirect to='/login'/>

  )
};

export default SecretPage;
