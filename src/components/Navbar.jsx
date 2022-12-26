import React from 'react';
import './Navbar.css';
import SearchField from './SearchField';

const Navbar = ({onSearchChange}) => {
  return (
    <div>
      <nav className='navbar-container'>
        <h1>RoboFriends</h1>
        <div>
          <SearchField onSearchChange={onSearchChange}/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar