import React from 'react'
import NavBar from './NavBar.jsx'
import './header.css'

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <div className='title'>
            <h2 className='uk-text-primary'><b>RioreAfrika</b></h2>
        </div>
        <div className='search'>
            <input type='text' id="form" className='uk-input' placeholder='What do you want to learn ?' required /><button className='uk-button uk-button-primary'><span uk-icon='search'></span></button>
        </div>

        <div className='NavBar'>
            <NavBar />
        </div>
      </div>
    </>
  )
}

export default Header;
