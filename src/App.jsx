
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
      image: "https://picsum.photos/200/200",
      price: 150000,
    },
    {
      id: 2,
      name: "iWatch",
      image: "https://picsum.photos/200/200",
      price: 50000,
    },
    {
      id: 3,
      name: "iPad",
      image: "https://picsum.photos/200/200",
      price: 70000,
    },
    {
      id: 4,
      name: "Macbook Pro",
      image: "https://picsum.photos/200/200",
      price: 200000,
    },
    {
      id: 5,
      name: "iPen",
      image: "https://picsum.photos/200/200",
      price: 2000,
    },
    {
      id: 6,
      name: "iCloth",
      image: "https://picsum.photos/200/200",
      price: 5000,
    },
    {
      id: 7,
      name: "iCloth",
      image: "https://picsum.photos/200/200",
      price: 5000,
    },
    {
      id: 8,
      name: "iCloth",
      image: "https://picsum.photos/200/200",
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
