import React, { useState, useEffect } from 'react'
import GameBoard from './GameBoard'
import GameOver from './GameOver';
import Reset from './Reset';




const Player_X ='X';
const Player_O ='O';

const winningCombo=[
  //rows

  {combo:[0,1,2], strikeClass:'strike-row-1'},
  {combo:[3,4,5], strikeClass:'strike-row-2'},
  {combo:[6,7,8], strikeClass:'strike-row-3'},

  //colums
  {combo:[0,3,6], strikeClass:'strike-column-1'},
  {combo:[1,4,7], strikeClass:'strike-column-2'},
  {combo:[2,5,8], strikeClass:'strike-column-3'},

  //diagonal
  {combo:[0,4,8], strikeClass:'strike-diagonal-1'},
  {combo:[2,4,6], strikeClass:'strike-diagonal-2'},

]
const GameState={
  playerXWins:0,
  playerOWins:1,
  draw:2,
  inProgress:3,
}

function checkWinner(tiles,setStrikeClass,setGameState){
  for(const{combo, strikeClass}of winningCombo){
    const tileValue1=tiles[combo[0]]
    const tileValue2=tiles[combo[1]]
    const tileValue3=tiles[combo[2]]
    if(
      tileValue1!==null && tileValue1===tileValue2 && tileValue1===tileValue3
    ){
      setStrikeClass(strikeClass)
      if(tileValue1===Player_X){
        setGameState(GameState.playerXWins)
      }
      else{
        setGameState(GameState.playerOWins)
      }
      return
    }
    
  }
const areAllTilesFilled=tiles.every((tile)=> tile!==null);
if(areAllTilesFilled)
{
  setGameState(GameState.draw)
}
}
 

const TicTacToeBoard = () => {
    const [tiles,setTiles]=useState(Array(9).fill(null))
    const [playerTurn,setPlayerTurn]=useState(Player_X)
    const [strikeClass, setStrikeClass]=useState()
  
    
  
  const [gameState,setGameState]=useState(GameState.inProgress)

    useEffect(()=>{
      checkWinner(tiles,setStrikeClass,setGameState);
    },[tiles])

    const handleTileClick=(index)=>{
      if(gameState !==GameState.inProgress){
        return;
      }
      
      const newTiles=[...tiles];
      newTiles[index]=playerTurn;
      setTiles(newTiles)
      if(playerTurn===Player_X){
        setPlayerTurn(Player_O)
      }
      else{
        setPlayerTurn(Player_X)
      }
      
      console.log(index)

    }

    const handleReset=()=>{
      setGameState(GameState.inProgress)
      setTiles(Array(9).fill(null))
      setStrikeClass(null)
      setPlayerTurn(Player_X)
    }
  return (
    <div>
        <h1>Tic Tac Toe</h1>
        <GameBoard tiles={tiles} 
        onTileClick={handleTileClick} 
        playerTurn={playerTurn} 
        strikeClass={strikeClass}/>

       <GameOver gameState={gameState}/>
       <Reset gameState={gameState} onReset={handleReset}/>
    </div>
  )
}

export default TicTacToeBoard