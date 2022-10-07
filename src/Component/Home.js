import React from 'react';
import Gallery from './Gallery';
import Header1 from './Header1';
import CartList from './CartList';
import '../Css/Home.css';
import { useState } from 'react';
import pic1 from '../images/pic1.jpg';import pic2 from '../images/pic2.jpg';import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';import pic5 from '../images/pic5.jpg';import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';import pic8 from '../images/pic8.jpg';import pic9 from '../images/pic9.jpg';
import pic10 from '../images/pic10.jpg';import pic11 from '../images/pic11.jpg';import pic12 from '../images/pic12.jpg';

function Home() {

  const [gallery, setGallery] = useState([
    {
      url: pic1,
      name: 'Nature',
      category: 'Nature',
      seller: 'Marco Grassi',
      price: 1999
    },
    {
      url: pic2,
      name: 'Mountains',
      category: 'Nature',
      seller: 'Macro Grassi',
      price: 2599
    },
    {
      url: pic3,
      name: 'Snow Mountains',
      category: 'Nature',
      seller: 'Macro Grassi',
      price: 50000
    },
    {
      url: pic4,
      name: 'Dessert',
      category: 'Nature',
      seller: 'Macro Grassi',
      price: 4000
    },
    {
      url: pic5,
      name: 'Beach',
      category: 'Nature',
      seller: 'Macro Grassi',
      price: 2000
    },
    {
      url: pic6,
      name: 'Red Mountains',
      category: 'nature',
      seller: 'Macro Grassi',
      price: 10000
    },
  ])
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header1 count={cart.length}
        handleShow={handleShow} ></Header1>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <Gallery gallery={gallery} addToCart={addToCart} ></Gallery>
      }


    </div>
  );
}

export default Home;