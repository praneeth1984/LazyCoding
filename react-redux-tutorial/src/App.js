import React from 'react'; 
import './App.css';
import './Styles/styles.css'; 


//Import Redux components
import {Provider } from 'react-redux'
import AmazonStore from './Redux/AmazonStore'

//Import all components
import Inventory from './Components/Inventory'
import BuyShirt from './Components/BuyShirt'
import BuyPant from './Components/BuyPant'


function App() {
  return (
    <Provider store={AmazonStore}>
      <div className="App">
        <BuyShirt/>
        <BuyPant/>
        <Inventory/>
      </div>
    </Provider>
  );
}

export default App;
