import React from 'react'

const GameState={
    playerXWins:0,
    playerOWins:1,
    draw:2,
    inProgress:3,
  }
const Reset = ({gameState,onReset}) => {
 if(gameState===GameState.inProgress){
    return;
 }
    return (
    <button  onClick={onReset}className="reset-button">Reset</button>
  )
}

export default Reset