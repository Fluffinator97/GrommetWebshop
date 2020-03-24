import React from 'react';
import Product from './product';

export default function ProductList(){

  const database = [
    { name: "red tshirt", price: 10.99, id: 1},
    { name: "yellow hoodie", price: 24.99, id: 2 },
    { name: "blue polo", price: 18.99, id: 3 },
  ]

  return (
    <div>
      {
        database.map(item => (
          <Product name={item.name} id={item.id} price={item.price} key={item.id} />
        ))
      }
    </div>
  )
}