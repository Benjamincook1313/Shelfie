import React, { Component } from 'react';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Form from './Component/Form/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [{
        image:'https://www.keenfootwear.com/dw/image/v2/BBCF_PRD/on/demandware.static/-/Sites-keen_catalog_master/default/dwc0347914/product-images/M-SUMMIT-COUNTY/1002646/1002646_P_PDP.jpg?sw=1100&sh=1100&sm=fit',
        name: 'Snowboots',
        price: '$35'
      }],
       
    };
  }
 


  
  render(props) {
    return (
      <div className="App">     
        <Dashboard products={this.state.products}/>
        <Form/>
        <Header/>
        </div>
    );
  }
}

export default App;
