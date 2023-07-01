import React from 'react'
import './cupEvents.css'
import NextCup from './nextCup/NextCup'
import ScoreBoard from './scoreBoard/ScoreBoard'


const CupEvents = () => {
  return (
    <div className='events'>
      <NextCup />
      <ScoreBoard />
    </div>
  )
}

export default CupEvents;