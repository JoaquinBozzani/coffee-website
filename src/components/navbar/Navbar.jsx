import React, { useState } from 'react';
import './navbar.css';
import './modal-navbar.css';
import './button-animation.css';
import logo from '../../assets/logo-white.svg'
import instagramLogo from '../../assets/social-media/instagram-white.svg'
import facebookLogo from '../../assets/social-media/facebook-white.svg'
import twitterLogo from '../../assets/social-media/twitter-white.svg'
import linkedinLogo from '../../assets/social-media/linkedin-white.svg'
import Modal from '../modal/Modal'
import Searchbar from './searchbar/Searchbar';



const Navbar = () => {

  //for searchbar
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  //searchbar icon
  function handleSearchIcon(e) {
    setIsSearchOpen(!isSearchOpen);
    
    // check if the button is open, if it is close it, if not open it
    e.currentTarget.classList.contains('open') 
    ? e.currentTarget.classList.remove('open') 
    : e.currentTarget.classList.add('open');
  }
  
  //for links
  const [isLinksOpen, setIsLinksOpen] = useState(false); 
  //links icon
  function handleLinksIcon(e) {
    setIsLinksOpen(!isLinksOpen);
    
    // check if the button is open, if it is close it, if not open it
    e.currentTarget.classList.contains('open') 
    ? e.currentTarget.classList.remove('open') 
    : e.currentTarget.classList.add('open');
  }

  return (
    <>
      {/* Desktop Searchbar */}
      <div className='desktop-searchbar-container'>
        <Searchbar />
      </div>  

      {/* NAVBAR */}
      <nav>

        {/* ----- FOR DESKTOP ----- */}
        <div className='desktop-container'>

            <div className='left-container'>
              <img src={logo} alt='logo' className='page-logo'/>
            </div>
            
            <div className='right-container'>
              <div className='inner-right-container-top'>
                {/* Desktop Searchbar */}
                {/* <Searchbar /> */}
                {/* Social media icons */}
                <div className={`icon-container ${isLinksOpen ? 'open' : '' }`}>
                  <img src={instagramLogo} alt='logo' className='social-icon'/>
                  <img src={facebookLogo} alt='logo' className='social-icon' />
                  <img src={twitterLogo} alt='logo' className='social-icon' />
                  <img src={linkedinLogo} alt='logo' className='social-icon' />
                </div>
                
              </div>

              <div className="inner-right-container-bottom">
                {/* Links */}
                <div className='link-container'>
                  <a href='#header' className='link' onClick={handleLinksIcon}>About</a>
                  <a href='#next-cup' className='link' onClick={handleLinksIcon}>Events</a>
                  <a href='#scoreboard' className='link' onClick={handleLinksIcon}>Results</a>
                  <a href='#contact' className='link' onClick={handleLinksIcon}>Contact</a>
                </div>
              </div>  
            </div> 
        </div>

        {/* ----- FOR MOBILE ----- */}
        <div className='mobile-container'>
          <img src={logo} alt='logo' className='page-logo'/>
          
          {/* SEARCH BUTTON */}
          <button className='navbar-search-button' onClick={handleSearchIcon}>
            <div className='navbar-search-button-icon'></div>
          </button>
          
          {/* LINKS BUTTON */}
          <button className={`navbar-links-button ${isLinksOpen ? 'open' : ''}`} onClick={handleLinksIcon}>
            <div className='navbar-links-button-icon'></div>
          </button>
        </div>

      </nav>
      

      {/* ----- MODALS ----- */}

      {/* SEARCHBAR MODAL */}
      <Modal className={`navbar-modal search ${isSearchOpen ? 'open' : ''}`}>
        <Searchbar />
      </Modal>
      
      {/* LINKS MODAL */}
      <Modal className={`navbar-modal ${isLinksOpen ? 'open' : ''}`}>
        <div className='link-container'>
          <a href='#header' className='link' onClick={handleLinksIcon}>About</a>
          <a href='#next-cup' className='link' onClick={handleLinksIcon}>Events</a>
          <a href='#scoreboard' className='link' onClick={handleLinksIcon}>Results</a>
          <a href='#contact' className='link' onClick={handleLinksIcon}>Contact</a>
        </div>

        <div className={`icon-container ${isLinksOpen ? 'open' : '' }`}>
          <img src={instagramLogo} alt='logo' className='social-icon'/>
          <img src={facebookLogo} alt='logo' className='social-icon' />
          <img src={twitterLogo} alt='logo' className='social-icon' />
          <img src={linkedinLogo} alt='logo' className='social-icon' />
        </div>
      </Modal>
    </>
  )
}

export default Navbar;