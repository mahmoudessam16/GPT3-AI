import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='ivory__navbar'>
      <div className='ivory__navbar-links'>
        <div className="ivory__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ivory__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ivory__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="ivory__navbar-menu">
        {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(!toggleMenu)} /> 
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(!toggleMenu)}/>}
        {toggleMenu && (
          <div className="ivory__navbar-menu_container scale-up-center">
            <div className="ivory__navbar-menu_container-links">
              <Menu />
              <div className="ivory__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
