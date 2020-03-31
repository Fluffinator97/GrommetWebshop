import React from 'react';
import Product from './product';

export default function ProductList(){
  
  const database = [
    { name: "red tshirt", price: 10.99, id: 1, img: './assets/tshirt.jpg'},
    { name: "yellow hoodie", price: 24.99, id: 2, img: './assets/.jpg' },
    { name: "blue polo", price: 18.99, id: 3, img: './assets/picture3.jpg' },
  ]
  
  return (
    <div>
      {
        database.map(item => (
          <Product name={item.name} id={item.id} price={item.price} key={item.id} img={item.img} description={item.desc} />
        ))
      }
    </div>
  )
}