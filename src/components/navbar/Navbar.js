import React from 'react';
import './Navbar.css';
import pen from '../../images/edit.png';
const Navbar = () => {
  return (
    <div className='nav'>
        <span className='logo'><img alt='pen' src={pen} className='penimg'/>TODO</span>
    </div>
  );
};

export default Navbar;
