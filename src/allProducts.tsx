import React from 'react'


export interface allProducts {
    name: string,
    price: number,
    id: number,
    img: string
 }
const products = [
    { name: "NEIDEN", price: 2995, id: 1, img: './assets/agy.jpg', description: 'The solid surface of solid wood is beautiful as it is, but if you want to make it more personal you can laser, paint or wax it.' },
    { name: "UTÅKER", price: 1795, id: 2, img: './assets/agy2.jpg', description: ''  },
    { name: "Napoli", price: 6495, id: 3, img: './assets/03.jpg', description: ''  },
    { name: "Cato LED", price: 2695, id: 4, img: './assets/19.jpg', description: ''  },
    { name: "Montreal LED", price: 599, id: 4, img: './assets/18.jpg', description: ''  },
    { name: "Karl", price: 399, id: 4, img: './assets/17.jpg', description: ''  },
    { name: "Novali", price: 1866, id: 7, img: './assets/05.jpg', description: ''   },
    { name: "Louise", price: 2995, id: 8, img: './assets/07.jpg', description: ''  },
    { name: "WoodenForge", price: 2495, id: 9, img: './assets/08.jpg', description: '' },
    { name: "Madison", price: 3199, id: 10, img: './assets/09.jpg', description: ''  },
    { name: "Emma", price: 1995, id:11, img: './assets/10.jpg', description: ''  },
    { name: "Emerson", price: 4695, id: 12, img: './assets/11.jpg', description: ''  },
    { name: "Velvet", price: 89, id: 13, img: './assets/20.jpg', description: ''  },
    { name: "Elefant", price: 129, id: 14, img: './assets/21.jpg', description: ''  },
    { name: "Zeb", price: 129, id: 15, img: './assets/22.jpg', description: ''  },
    
]

export default products