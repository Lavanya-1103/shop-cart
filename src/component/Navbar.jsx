import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'


const Navbar = () => {
  const {state, dispatch} = useContext(ThemeContext);

  return (
    <>
    <nav className={`navbar ${state.theme === "light" ? "light":"dark"}`} aria-label="Main navigation">
      <NavLink className="nav-logo" to="/" aria-label="Shop Cart home">shopcart<span>.</span></NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>

        <button
          className="theme-toggle-btn"
          type="button"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          aria-label={`Switch to ${state.theme === "light" ? "dark" : "light"} theme`}
        >
          <span aria-hidden="true">{state.theme === "light" ? "☾" : "☀"}</span>
          <span>{state.theme === "light" ? "Dark" : "Light"}</span>
        </button>
      </div>

    
    </nav>
    </>
  );
};

export default Navbar;
