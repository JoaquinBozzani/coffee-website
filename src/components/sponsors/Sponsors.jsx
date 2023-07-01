import React from 'react'
import './sponsors.css'
import LOGOS from './logos.js'


const Sponsors = () => {

    function log() {
        console.log(LOGOS)
    }

    return (
    <div className='sponsors'>
        <p className='sponsors-title'>World Barista Cup Sponsors</p>

        <div className='sponsors-logo-container'>
            {
                LOGOS && LOGOS.map((item) => 
                    <img src={item.image} alt="logo" className='sponsor' key={item.id} />
                )
            }
        </div>

           
    </div>
  )
}

export default Sponsors