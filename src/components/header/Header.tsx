import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom'



const Header = () => {
  return (
      <div className='header d-flex'>
        <h3>
          <a href="#">StarDB</a>
        </h3>
        <ul className="d-flex">
          <li><NavLink  to={'/people'} activeClassName="active">People</NavLink ></li>
          <li><NavLink  to={'/planets'} activeClassName="active">Planets</NavLink ></li>
          <li><NavLink  to={'/starships'} activeClassName="active">Starships</NavLink ></li>
        </ul>
      </div>
  );
};

export default Header;
