import React from 'react'

const NextCup = () => {
  return (
    <div className='next-cup' id='next-cup'>
      <h1 className='title'>Next Event</h1>

      <h2 className='main-text'>World Barista Cup 2022</h2>

      <ul className='list'>
        <li className='list-item'>
          <p>Copenhagen, Denmark</p>
        </li>

        <li className='list-item'>
          <p>Dates: 25th - 27th August 2022</p>
        </li>

        <li className='list-item'>
          <p>Theme: SENSORY</p>
        </li>
      </ul>

      <button className='sign-up-button'>Sign Up</button>
    </div>
  )
}

export default NextCup;