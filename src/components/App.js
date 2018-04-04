import React, { Component } from 'react';
import ProductsContainer from '../containers/products.js'
import ShoppingCartContainer from '../containers/shoppingCart.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to Shopping Cart </h1>
        <ProductsContainer />
        <ShoppingCartContainer />
      </div>
    );
  }
}

export default App;
