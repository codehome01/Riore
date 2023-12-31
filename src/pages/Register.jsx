import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

const Register = () => {
  const myStyle ={
    color:'red',
    
  } 
  return (
    <>
     <div className='registerContainer'>
        <h1 className='uk-text-primary uk-text-center'> Student Registration</h1><hr/>
        <form method='POST'>
          <div className='form'>
              <label>Firstname<span> *</span></label><br />
              <input type='text' name='' className='fn' placeholder='Firstname' required />
          </div>
          <div className='form'>
              <label>Middle<span></span></label><br />
              <input type='text' name='' className='md' placeholder='Middle (Optional)' required />
          </div>
          <div className='form'>
              <label>Lastname<span>*</span></label><br />
              <input type='text' name='' className='ln' placeholder='Lastname' required />
          </div>
          <div className='form'>
          <label>Gender<span>*</span></label><br />
              <select className='gender'>
                <option value='Select'>Select Gender</option>
                <option value='Male'>Male</option>
                <option value="Female">Female</option>
              </select>
          </div>
          <div className='form'>
              <label>Class<span>*</span></label><br />
              <input type='text' name='' className='class' placeholder='Class' required />
          </div>
          <div className='form'>
              <label>State<span>*</span></label><br />
              <input type='text' name='' className='state' placeholder='State' required />
          </div>
          <div className='form'>
              <label>LGA<span>*</span></label><br />
              <input type='text' name='' className='lga' placeholder='LGA' required />
          </div>
          <div className='form'>
          <label>DOB<span>*</span></label><br />
            <input type='date' name='' className='DOB' placeholder='DOB' required/>
          </div>
          <div className='form-upload'>
          <label>Upload Passport<span>*</span></label><br />
            <input type='file' name='image' className='upload' placeholder='image' required />
          </div><hr/>
          <div className='existing-Acct'>
            <p>I Already Have an Account <span><Link to='/userLogin'>Login</Link></span></p>
          </div>
          <div className='register-btn'>
            <button className='btn-reg'>Register</button>
          </div>
        </form>
     </div>
    </>
  )
}

export default Register
