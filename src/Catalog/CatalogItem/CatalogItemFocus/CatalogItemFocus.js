import React from 'react';
import './CatalogItemFocus.css';

export class CatalogItemFocus extends React.Component {
  render() {
    return null;
    return (
      <div className='modal'>
      <div className='modal-content'>
        <img src={this.props.item.src}/>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.price}</p>
      </div>
      </div>
    );
  }
}
