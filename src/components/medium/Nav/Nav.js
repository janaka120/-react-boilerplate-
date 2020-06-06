import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

const NavComponent = () => {
  return (
    <div className='nav-container'>
      <ul className='list'>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/about'>
        <li>About</li>
      </Link>
      </ul>
    </div>
  )
}

export default NavComponent;