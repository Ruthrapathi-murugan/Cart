
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Header from './Header';
import Card from './Card';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false); // State to manage cart visibility

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (product) => {
    const index = cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
      setCartCount(cartCount - 1);
    }
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const products = [
    {
      id: 1,
      name: "iPhone",
      image: '/Images/4.jpg',
      price: 150000,
    },
    {
      id: 2,
      name: "iWatch", 
      image: '/Images/5.jpg',
      price: 50000,
    },
    {
      id: 3,
      name: "iPad",
      image:'/Images/6.jpg',
      price: 70000,
    },
    {
      id: 4,
      name: "Macbook Pro",
      image: '/Images/7.jpg',
      price: 200000,
    },
    {
      id: 5,
      name: "iPen",
      image: '/Images/8.jpg',
      price: 2000,
    },
    {
      id: 6,
      name: "iCloth",
      image: '/Images/10.jpg',
      price: 5000,
    },
    {
      id: 7,
      name: "iCloth",
      image: '/Images/img3.jpg',
      price: 5000,
    },
    {
      id: 8,
      name: "iCloth",
      image: '/Images/img3.jpg',
      price: 5000,
    },
    {
      id: 9,
      name: "ikk",
      image: '/Images/img3.jpg',
      price: 5000,
    }
  ];

  return (
    <>
      <Navbar cartItemCount={cartCount} cartItems={cartItems} toggleCart={toggleCart} /> {/* Pass toggleCart function */}
      <div className="cartbut" style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
        Cart: {cartCount}
        {cartOpen && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />} {/* Render Cart component if cartOpen is true */}
      </div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="product-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', gap: '20px', flexWrap: 'wrap' }}>
            {products.map((product) => (
              <Card key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
}

export default App;
