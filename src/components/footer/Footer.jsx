import React from 'react';
import './footer.css';
import mainLogo from '../../assets/logo-white.svg'
import instagramLogo from '../../assets/social-media/instagram-white.svg'
import facebookLogo from '../../assets/social-media/facebook-white.svg'
import twitterLogo from '../../assets/social-media/twitter-white.svg'
import linkedinLogo from '../../assets/social-media/linkedin-white.svg'
import POSTS from './posts.js'

const Footer = () => {
  return (
    <div className='main-container'>

      <div className='logo-container'>
        <img src={mainLogo} alt="logo" className='main-logo' />
        <div className='social-media-logos'> 
          <img src={instagramLogo} alt="logo" className='logo' />
          <img src={facebookLogo} alt="logo" className='logo logo-facebook' />
          <img src={twitterLogo} alt="logo" className='logo' />
          <img src={linkedinLogo} alt="logo" className='logo' />
        </div>
      </div>

      <div className='footer-content'>

        <div className='about'>
          <h2 className='about-title'>About World Barista Cup</h2>
          <h4 className='about-subtitle'>The vision within</h4>
          <h4 className='about-subtitle'>The World Barista Cup</h4>
          <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere officia ipsam iure? Modi delectus maxime impedit tenetur? Odit nulla, tempora hic similique voluptatum facere ducimus minus nostrum error fuga atque quam ratione, ipsum, quod ab eius corrupti totam in ipsa. Vel est eius dolores reprehenderit, odio accusantium expedita libero.</p>
        </div>

        <div className='instagram-feed'>
          <h2 className='instagram-title'>Instagram feed</h2>
          {/* ----- INSTAGRAM POSTS ----- */}
          <div className='instagram-posts'>
            {
              POSTS && POSTS.map((item) => 
              <img src={item.image} alt="logo" className='post' key={item.id} />
              )
            }
          </div>
        </div>

        <div className='contact' id='contact'>
          <h2 className='contact-title'>Contact</h2>
          <h2 className='contact-title'>World Barista Cup</h2>

          <h3 className='contact-info'>Some Place </h3>
          <h3 className='contact-info'>1234 Street</h3>
          <h3 className='contact-info'>+123 456 789</h3>
          <h3 className='contact-info'>CVR: 1234567</h3>
          <h3 className='contact-info'>info@worldbaristacup.com</h3>
        </div>
      
      </div>
    </div>
  )
}

export default Footer 