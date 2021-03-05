import React from 'react';
import { CatalogItem } from './CatalogItem/CatalogItem.js';
import { CatalogItemFocus } from './CatalogItemFocus/CatalogItemFocus';
import './Catalog.css';

export class Catalog extends React.Component {

  render() {
    var catalog_list = [{
      'src': "ogp-test.jpg",
      'name': "Test Shirt One",
      'price': "26.99"
    },
    {
      'src': "ogp-test.jpg",
      'name': "Test Shirt Two",
      'price': "99.99"
    },
    {
      'src': "ogp-test.jpg",
      'name': "Test Shirt Three",
      'price': "0.99"
    }];


    const images = catalog_list.map(item => (
      <div>
        <CatalogItemFocus item={item}/>
        <CatalogItem item={item}/>
      </div>
    ));

    return (
      <div className="catalog">{images}</div>
    );
  }
}
