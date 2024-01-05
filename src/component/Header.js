import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PiUserLight, PiHeartLight, PiBagSimple } from "react-icons/pi";

function Header() {
  return (
    <div className='header'>
       <div className="header_container">
          <Link to="/" className='header_logo'>FurnitureHub</Link>
          <ul className="header_menu">
            <li className="header_menu_items">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="header_menu_items">
                <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="header_menu_items">
                <NavLink to="/pages">Pages</NavLink>
                <ul className="submenu">
                    <li className="submenu_item">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="submenu_item">
                        <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li className="submenu_item">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li className="submenu_item">
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </ul>
            </li>
            <li className="header_menu_items">
                <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <ul className="header_user_actions">
             <li className="header_user_items">
                <PiUserLight />
             </li>
             <li className="header_user_items">
                <PiHeartLight />
             </li>
             <li className="header_user_items">
                <PiBagSimple />
             </li>
          </ul>
       </div>
    </div>
  )
}

export default Header
