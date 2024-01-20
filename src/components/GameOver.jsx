import React from 'react'




const GameOver = ({gameState}) => {
    const GameState={
        playerXWins:0,
        playerOWins:1,
        draw:2,
        inProgress:3,
    }
   switch(gameState){
    case GameState.inProgress:
        return<div className=''>

        </div>
        case GameState.playerXWins:
            return<div className='game-over'>
                X Wins
            </div>
            case GameState.playerOWins:
                return<div className='game-over'>
                        O Wins
                </div>
                case GameState.draw:
                    return<div className='game-over'>
                          Draw
                    </div>

                    deafult:
                    <></>
                
   }
}

export default GameOver