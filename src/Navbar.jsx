// Navbar.js
import React from 'react';
import { BiCart } from 'react-icons/bi';

function Navbar({ cartItemCount, toggleCart }) { // Include toggleCart in props
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
              </li>
            </ul>
            {/* Add onClick event to the cart button to trigger toggleCart */}
            <button className="btn btn-outline-dark" type="button" onClick={toggleCart}> {/* Call toggleCart onClick */}
              <BiCart className="me-1" />
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItemCount}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
