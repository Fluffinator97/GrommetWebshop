import React from 'react'

export interface Product {
    name: string
    price: number
    id: number
    img: string
    description: string
    category: string
}

const products: Product[] = [

    //beds

    { name: "Neiden", price: 399, id: 1, img: '../assets/agy.jpg', description: 'The solid surface of solid wood is beautiful as it is, but if you want to make it more personal you can laser, paint or wax it. Ribbed, mattress and bedding are sold separately. 90x200cm', category: 'beds' },
    { name: "Utåker", price: 1795, id: 2, img: '../assets/agy2.jpg', description: 'Mattress and bedding are sold separately. Stacked on each other, these 2 beds become a single bed or sofa. It includes 2 bed 80x200cm', category: 'beds'  },
    { name: "Napoli", price: 6495, id: 3, img: '../assets/03.jpg', description: 'Fabric Mega light gray with Napoli bed mattress and 18 cm metal legs, 5-zone pocket elastic, Each zone adapts to your body. 120x200cm', category: 'beds'  },
    { name: "Roma", price: 7995, id: 16, img: '../assets/26.jpg', description: 'Fabric Roma light gray with bed mattress and 18 cm metal legs. The width is 90cm, height 60cm and length 200cm.', category: 'beds'  },
    { name: "Cozy Bed", price: 3995, id: 17, img: '../assets/23.jpg', description: 'Fabric Look light gray with bed mattress and 16 cm legs, with the width of 140cm, height 50cm and lenght 200cm.', category: 'beds'  },
    { name: "Luna", price: 1295, id: 18, img: '../assets/29.jpg', description: 'Fabric Athena dark gray, with bed mattress and 25 cm black wooden legs, Affordable bed, Perfectly suited to the guest room, Durable fabric. 90x200cm', category: 'beds'  },
    
    //lamps

    { name: "Cato LED", price: 2695, id: 4, img: '../assets/19.jpg', description: 'Matte black lacquered metal, Energy-saving LED light source included, Directional light, Included in a series', category: 'lamps'  },
    { name: "Montreal", price: 599, id: 5, img: '../assets/18.jpg', description: 'White metal, Energy-efficient LED light source included, Directional light, Included in a series', category: 'lamps'  },
    { name: "Karl", price: 399, id: 6, img: '../assets/17.jpg', description: 'Metal with shade in opal white glass', category: 'lamps'  },
    { name: "Zenit", price: 299, id: 19, img: '../assets/31.jpg', description: 'White glas', category: 'lamps'  },
    { name: "Vera", price: 299, id: 20, img: '../assets/32.jpg', description: 'White glas', category: 'lamps'  },
    { name: "Classic", price: 899, id: 21, img: '../assets/33.jpg', description: 'White textil', category: 'lamps'  },
    
    //tables

    { name: "Novali", price: 1866, id: 7, img: '../assets/43.jpg', description: 'White marble with frame in black lacquered metal, L 80 cm', category: 'tables'   },
    { name: "Louise", price: 2995, id: 8, img: '../assets/07.jpg', description: 'Swedish-made, Practical with shelf, Delicious design, L 90 cm', category: 'tables'  },
    { name: "W.Forge", price: 2495, id: 9, img: '../assets/08.jpg', description: 'Antique brown lacquered recycled wood with black lacquered metal base, FSC-labeled recycled wood,Ø 80 cm', category: 'tables' },
    { name: "Nelly", price: 1495, id: 22, img: '../assets/34.jpg', description: 'Marble patterned glass with frame in black lacquered metal, 2 parts', category: 'tables'  },
    { name: "Yesterday", price: 1295, id: 23, img: '../assets/35.jpg', description: 'Oiled wood tables', category: 'tables'  },
    { name: "Terazzo", price: 699, id: 24, img: '../assets/36.jpg', description: 'White / multicolored terrazzo with frame in black lacquered metal', category: 'tables'  },

    //carpets

    { name: "Madison", price: 3199, id: 10, img: '../assets/09.jpg', description: 'The polyester material provides a durable and lint-free carpets,Oeko-Tex certified. 120x200cm', category: 'carpets'  },
    { name: "Emma", price: 1995, id:11, img: '../assets/10.jpg', description: 'The polyester material provides a durable and lint-free carpets. 120x200cm', category: 'carpets'  },
    { name: "Emerson", price: 4695, id: 12, img: '../assets/11.jpg', description: 'The viscose material provides a soft surface with luster, Handmade, each carpets is unique. 120x200cm', category: 'carpets'  },
    { name: "Richmond", price: 1495, id: 25, img: '../assets/37.jpg', description: 'Polyester, offwhite, 100x200cm', category: 'carpets'  },
    { name: "Zebra", price: 5495, id: 26, img: '../assets/38.jpg', description: '100% viscose with zebra pattern, silver / black, width 100x200', category: 'carpets'  },
    { name: "Samira", price: 3295, id: 27, img: '../assets/39.jpg', description: 'The viscose material provides a soft surface with luster, 260x200', category: 'carpets'  },


    //pillows

    { name: "Velvet", price: 89, id: 13, img: '../assets/20.jpg', description: '100% polyester fabric with bored sand, 60 x 60', category: 'pillows'  },
    { name: "Elefant", price: 129, id: 14, img: '../assets/21.jpg', description: '100% cotton, beige with animal print, 60 x 60', category: 'pillows'  },
    { name: "Zeb", price: 129, id: 15, img: '../assets/22.jpg', description: '100% cotton, rust with animal print, 60 x 60', category: 'pillows'  },
    { name: "Rosso", price: 149, id: 28, img: '../assets/40.jpg', description: 'Cotton blend, multi-colored, fiber-cushion included 30 x 40', category: 'pillows'  },
    { name: "Marrakesh", price: 199, id: 29, img: '../assets/41.jpg', description: '100% cotton in macramé, off-white, fiber-cushion included 30 x 40', category: 'pillows'  },
    { name: "Sam", price: 239, id: 30, img: '../assets/42.jpg', description: '100% cotton, white, fiber cushion included 30 x 40', category: 'pillows'  },


]

export default products