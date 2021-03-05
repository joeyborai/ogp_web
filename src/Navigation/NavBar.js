import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export class NavBar extends React.Component {
  render() {
    const logo = "";

    return (
      <div id="navbar" className="sticky">
        <img className="top-left-logo" src="OGPlogo3.png" />
        <FontAwesomeIcon icon={faShoppingCart} className="shopping-icon"/>
      </div>
    );
  }
}
