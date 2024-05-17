import React from 'react';

function Header() {
  return (
    <>
    <div>
    <h1 style={{alignContent:'center',textAlign:'center'}}>RUTHRAPATHI SHOPING SITE</h1>
    </div>
      <header style={{ 
        backgroundImage: 'url("/Images/img2.jpg")', // Path to the image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }} className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
              {/* <h1 className="display-4 fw-bolder" style={{color:'black'}}>Ruthrapathi Shopping</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
