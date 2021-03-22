import React, { useState } from 'react';
import { CatalogItemFocus } from './CatalogItemFocus/CatalogItemFocus';
import './CatalogItem.css';

export const CatalogItem = (props) => {
  const [active, setActivity] = useState(false);

  return (
    <div>
      <CatalogItemFocus item={props.item} active={ active } closeItem={ setActivity }/>
      <button className="catalogItem" onClick={ () => setActivity(!active) }>
        <img className="catalog-pic" src={props.item.src}></img>
        <p className="catalog-item-name">{props.item.name}</p>
        <p className="catalog-item-price">{props.item.price}</p>
      </button>
    </div>
  )
}
