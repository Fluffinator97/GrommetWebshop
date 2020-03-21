import React from 'react';
import ProductList from './productList'
import {ShopCart} from './ShopCart'
import { CartProvider } from './context/cartContext';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <div>
          <ShopCart />
          <ProductList />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
