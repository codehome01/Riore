import React from 'react'
import { FaFacebook} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import { FaGithub} from "react-icons/fa6";
import { FaGooglePlusG} from "react-icons/fa6";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className='footerContainer'>
            <div className='footer-title'>
                <h2 className='uk-text-primary'><b>RioreAfrika</b></h2>
                <p>you can get in tourch with us through the social media handle</p>
            <div className='icons'>
               <a href='facebook.com'><FaFacebook className='icon' /></a>
                <a href=''><FaTwitter className='icon' /></a>
                <a href=''><FaGithub className='icon' /></a>
                <a href=''><FaGooglePlusG className='icon' /></a>
             </div>

            </div>

            <div className='footer-details'>
                <h2>Company</h2>
                <p>you can get in tourch with us through the social media handle</p>
            </div>
            <div className='footer-support'>
                <h2>Support</h2>
                <p>you can get in tourch with us through the social media handle</p>
            </div>
            <div className='footer-about'>
                <h2>About</h2>
                <p>you can get in tourch with us through the social media handle</p>
            </div>
      </div>
    </>
  )
}

export default Footer
