import React from 'react';
import {Redirect} from 'react-router-dom';

const LoginPage: React.FC<any> = props => {
  const {isLoggedIn, onLogin} = props

  return (
      isLoggedIn
          ? <Redirect to='/'/>
          : <div className='jumbotron'>
            <p>Login to see secret page!</p>
            <button
                className='btn btn-primary'
                onClick={onLogin}>Login
            </button>
          </div>
  );
};

export default LoginPage;
