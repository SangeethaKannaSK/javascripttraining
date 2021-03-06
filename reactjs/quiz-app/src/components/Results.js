import React from 'react'

const result = ({score, playAgain}) => (
    <div className='score-board'>
        <div className='score'>You score {score} / 5 correct answers !</div>
        <button className='playBtn' onClick={playAgain}>Play Again!</button>     
    </div>
)