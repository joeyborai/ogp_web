import React from 'react';
import './CatalogItemFocus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const CatalogItemFocus = (props) => {
  var response = null;

  function handleClose() {
    props.closeItem()
  }

  if (props.active){
    response = (
      <div className='modal'>
        <div className='modal-nav'>
          <button className='modal-close' onClick={ handleClose }>
            <FontAwesomeIcon icon={faTimes} className="closing-icon"/>
          </button>
        </div>
      <div className='modal-content'>
        <img className='modal-image' src={props.item.src}/>
        <p>{props.item.name}</p>
        <p>{props.item.price}</p>
      </div>
      </div>
    )
  }

  return response;
}
