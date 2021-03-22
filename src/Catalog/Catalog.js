import React from 'react';
import axios from 'axios';
import { CatalogItem } from './CatalogItem/CatalogItem.js';
import './Catalog.css';

export class Catalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => binary += String.fromCharCode(b));

    return window.btoa(binary);
  };

  componentDidMount() {
    fetch('http://ogp-web.herokuapp.com/catalog/')
    .then((res) => res.json())
    .then((data) => {
      for(var i = 0; i < data.length; i++){
        var base64Flag = 'data:image/jpeg;base64,';
        var imageStr = this.arrayBufferToBase64(data[i]["image"]["data"]["data"]);
        var current = {
          'name': data[i]["name"],
          'price': data[i]["price"],
          'src': base64Flag + imageStr
        }
        console.log([...this.state.list, current]);

        this.setState({
          list: [...this.state.list, current]
        });
      }
    })
  }

  render() {
    var catalog_list = this.state.list;
    console.log(catalog_list);

    const images = catalog_list.map(item => (
      <CatalogItem item={item}/>
    ));

    return (
      <div className="catalog">{images}</div>
    );
  }
}
