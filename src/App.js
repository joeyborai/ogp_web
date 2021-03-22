import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { NavBar } from './Navigation/NavBar.js';
import { MissionStatement } from './MissionStatement/MissionStatement.js';
import { Catalog } from './Catalog/Catalog.js';
import { ItemDisplay } from './ItemDisplay/ItemDisplay.js';
import { ItemForm } from './ItemForm/ItemForm.js';
import { ContactInfo } from './ContactInfo/ContactInfo.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_view: 'main',
      cart_items: []
    }
  }

  main = (
    <div id='main'>
      <div className="App-header">
        <NavBar />
        <MissionStatement />
      </div>
      <Catalog/>
      <ContactInfo/>
    </div>
  )

  item = (
    <div id='item'>
      <ItemDisplay />
      <ItemForm />
    </div>
  )
  cart = (
    <div id='cart'>
    </div>
  )

  render() {
    return (
      <div className="background">
      <div className="App">
        { this.state.current_view === 'main' ? this.main : null }
        { this.state.current_view === 'item' ? this.item : null }
        { this.state.current_view === 'cart' ? this.cart : null }
      </div>
      </div>
    );
  }
}

export default App;
