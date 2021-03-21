import React from 'react';
import {Redirect} from 'react-router-dom';

type LoginPagePropsType = {
  isLoggedIn: boolean
  onLogin: () => void
}
const LoginPage: React.FC<LoginPagePropsType> = props => {
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
