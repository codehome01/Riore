import React from 'react'
import {Link} from 'react-router-dom'
import './TutorRegister.css'
const  TutorRegister = () => {
  return (
    <>
       <div className='TutorRegisterContainer'>
        <h1 className='uk-text-primary uk-text-center'> Tutor Registration</h1><hr/>
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
              <label>Discipline<span>*</span></label><br />
              <input type='text' name='' className='discipline' placeholder='Discipline' required />
          </div>
          <div className='form'>
              <label>Pnone No<span>*</span></label><br />
              <input type='text' name='' className='phone' placeholder='Phone No.' required />
          </div>
          <div className='form'>
              <label>Email<span>*</span></label><br />
              <input type='email' name='' className='email' placeholder='Email Address' required />
          </div>
          <div className='form'>
              <label>What are the Programming Technology You are Good At?<span>*</span></label><br />
              <textarea type='text' cols='60'  className='specialization' placeholder='eg python, java, php,javascript etc' required />
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
            <p>I Already Have an Account <span><Link to='/TutorLogin'>Login</Link></span></p>
          </div>
          <div className='register-btn'>
            <button className='btn-reg'>Register</button>
          </div>
        </form>
     </div>
    </>
  )
}

export default TutorRegister 
