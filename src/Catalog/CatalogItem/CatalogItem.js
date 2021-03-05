import React from 'react';
import { CatalogItemFocus } from './CatalogItemFocus/CatalogItemFocus';
import './CatalogItem.css';

export class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
    this.state = {
      active: false
    }
  }

  selectItem() {
    this.setState({
      active: true
    })
  }

  render() {
    return (
      <div>
      <CatalogItemFocus item={this.props.item} active={this.state.active}/>
      <button className="catalogItem" onClick={ this.selectItem }>
        <img className="catalog-pic" src={this.props.item.src}></img>
        <p className="catalog-item-name">{this.props.item.name}</p>
        <p className="catalog-item-price">{this.props.item.price}</p>
      </button>
      </div>
    )
  }
}
