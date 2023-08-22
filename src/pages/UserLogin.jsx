import React from 'react'
import { FaArrowRightToBracket } from "react-icons/fa6";
import './UserLogin.css'

const UserLogin = () => {
    const myStyle = {
        width:'300px'
    }
  return (
    <>
      <div className='loginForm uk-card-body uk-card-default'>
        <div className='title'>
            <h1 className='uk-text-primary'>STUDENT LOGIN</h1><hr/>
        </div>
        <form method='POST'>
          <div className=''>
            {/* <label>Username:</label> */}
            <input type='text' className='userForm' placeholder='Username' required />
          </div>
          <div className='password'>
            {/* <label>Password:</label> */}
            <input type='password' className='pswForm'  placeholder='Password' required />
          </div>
          <div className='rememberPsw'>
            <input type='checkbox' value='Remember Details'/> Remember Details
          </div>
          <div className='forgot'>
            <a href='#'>Forgot Password ?</a>
          </div>
          <div className='btn'>
            <button className='Login uk-button uk-button-primary uk-button-small'>Login <span><FaArrowRightToBracket /></span></button>
          </div>
        </form>
     </div>
    </>
  )
}

export default UserLogin
