import React from 'react'

const ScoreBoard = () => {
  return (
    <div className='scoreboard' id='scoreboard'>
        <h1 className='title'>Scoreboard</h1>

        <h2 className='main-text'>Winners from last events</h2>

        <ul className='list'>
            <li className='list-item'>
                <p>2022 - ?</p>
            </li>

            <li className='list-item'>
                <p>2021 - Poland</p>
            </li>

            <li className='list-item'>
                <p>2020 - Panama</p>
            </li>

            <li className='list-item'>
                <p>2019 - Egypt</p>
            </li>

            <li className='list-item'>
                <p>2018 - Italy</p>
            </li>

            <li className='list-item'>
                <p>2017 - Spain</p>
            </li>

            <li className='list-item'>
                <p>2016 - Switzerland</p>
            </li>
        </ul>

    </div>
  )
}

export default ScoreBoard