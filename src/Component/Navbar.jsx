import React from 'react';
import Logo from'../img/logo.png'




function Navbarnew(props) {

   return (
    <nav className="navbar navbar-expand-md navbar-light">
    <div className="container-md">
      <h1>Start Bootstrap</h1>
      
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav  text-start">
          <li className="nav-item">
            <a className="nav-link" href="#none">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#none">About</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Shop
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#none">All Products</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#none">Popular Items</a></li>
            
            <li><a className="dropdown-item" href="#none">New Arrivals</a></li>
          </ul>
        </li>
              
        </ul>
        <form className="d-flex mt-1 ms-auto">
          <button className="btn btn-outline-dark" type="button"><i className="fa-sharp fa-solid fa-cart-arrow-down pe-1"></i>Cart <span className="badge bg-dark ms-1 rounded-circle">{props.cartValue}</span></button>
        </form>
      </div>
    </div>
  </nav>
  );
}

export default Navbarnew;