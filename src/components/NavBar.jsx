import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
const NavBar = () => {
    const myStyle = {
        display:'flex',
        gap:'10px',
        marginRight:'10px',
        
    }

  return (
    <>
      <div className='nav' style={myStyle}>
        <Link to='/'>Home</Link>
        <Link to='/Courses'>Courses</Link>
        <Link to='/CommunityLearning'>Community Learning</Link>
        <Link to='/Register'>Register</Link>
        <Link to='UserLogin'>Login</Link>

      </div>
    </>
  )
}

export default NavBar;

