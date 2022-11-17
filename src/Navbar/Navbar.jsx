import React from 'react';
import {NavLink ,Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-4 ">
    <div className="container">
      <NavLink className="navbar-brand" >START REACT
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         
          <li className="nav-item">
            <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "color nav-link"
                        : "nav-link"
                    } to="">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "color nav-link"
                        : "nav-link"
                    } to="portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "color nav-link"
                        : "nav-link"
                    } to="about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "color nav-link"
                        : "nav-link"
                    } to="contact">Contact</NavLink>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

