import React, { useState } from 'react';
import './Navbar.css';
import '../App.css';
import { Link, Route, NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ handleSubmit, searchTerm, setSearchTerm, handleCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  function toggleOptions() {
    setShowOptions(!showOptions);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navBar'>
      <div className='menuToggle' onClick={handleMenuToggle}>
        <i className='fa fa-bars'></i>
      </div>

      <ul className='navBarList'>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <ul className={`menuList ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/best-rated" onClick={handleMenuToggle} className="navLink">Best rated</Link>
        </li>

        <div>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleOptions}>
          {selectedOption ? selectedOption.label : 'Categories'}
        </div>
        {showOptions &&
          <div className="dropdown-options">
            <div className="dropdown-option" onClick={(event) => handleCategory(event, { value: 28, label: 'Action' })}>
              Action
            </div>
            <div className="dropdown-option" onClick={(event) => handleCategory(event, { value: 35, label: 'Comedy' })}>
              Comedy
            </div>
            <div className="dropdown-option" onClick={(event) => handleCategory(event, { value: 27, label: 'Horror' })}>
              Horror
            </div>
          </div>
        }
      </div>
    </div>
      </ul>
  

      <ul className='navBarList'>
      <i className="fa fa-search fa-lg"></i>
      <form onSubmit={handleSubmit} onKeyUp={handleKeyPress}>
        <div className="search-container">
          <input type="text" placeholder="Search movies" value={searchTerm} onChange={handleChange} />
        </div>
      </form>
        <li>
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;









        
        
        






