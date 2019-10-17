import React, {useState} from 'react'
import Tile from './Tile.js'

function Board() {
    //Hooks
    const [player, setPlayer] = useState(true)
    const [p1Moves, setP1] = useState([])
    const [p2Moves, setP2] = useState([])
    const [boardWinnerFound, setWinner] = useState(false)
    
    //Constants
    const board = Array(9).fill(null)
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[3,5,8],[0,4,8],[2,4,6]]
    
    //Game Logic
    const hasWon = (playerTurn, index) => !!winConditions.filter(wincondition => wincondition.every(winNum => [...playerTurn, index].includes(winNum))).length
    
    const gameLogic = index => {
        const winnerFound = hasWon(player ? p1Moves : p2Moves, index)
        player ? setP1([...p1Moves,index]) : setP2([...p2Moves,index])

        if(winnerFound){
            alert(`${player ? "Player One Won" : "Player Two Won"}`)
            setWinner(winnerFound)
            //Stop game
        }else{
            setPlayer(!player)
        }
    }
    
    //Board Generation
    const generateTile = (elm, ind) => (
        <Tile handleClick={gameLogic} player={player} index={ind} key={ind}/>
    )
    
    
    return (
        <>
            <h2>{player ? "Player One" : "Player Two"}{boardWinnerFound ? "  WON!!!!!" : ''} </h2>
            <div className="game_container">
                <div className="grid">
                    {board.map(generateTile)}
                </div>
            </div>
        </>
    );
}

export default Board;