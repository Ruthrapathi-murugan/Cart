// App.js
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Header from './Header';
import Card from './Card';

function App() {
  // Define products array
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    // Add the selected product to the cart
    setCartItems([...cartItems, product]);
    // Increment the cart count by 1
    setCartCount(cartCount + 1);
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
      <Navbar cartItemCount={cartCount} cartItems={cartItems} />
      <div className="cartbut" style={{ padding: '20px', justifyContent: 'right' }}>
        {/* Display the number of items in the cart */}
        Cart: {cartCount}
      </div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="id" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', gap: '20px', flexWrap: 'wrap' }}>
            {/* Mapping through products array to render Card components */}
            {products.map((product, index) => (
              <Card key={index} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
