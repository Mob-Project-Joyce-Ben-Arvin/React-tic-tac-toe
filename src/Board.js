import React, {useState} from 'react'
import Tile from './Tile.js'

function Board() {
    //Hooks
    const [player, setPlayer] = useState(true)
    const [scores, setScores] = useState([0, 0])

    const [p1Moves, setP1] = useState([])
    const [p2Moves, setP2] = useState([])
    const [boardWinnerFound, setWinner] = useState(false)
    
    //Constants
    const board = Array(9).fill(null)
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
    //Game Logic
    const hasWon = (playerTurn, index) => !!winConditions.filter(wincondition => wincondition.every(winNum => [...playerTurn, index].includes(winNum))).length
    
    const gameLogic = index => {
        const winnerFound = hasWon(player ? p1Moves : p2Moves, index)
        
        player ? setP1([...p1Moves,index]) : setP2([...p2Moves,index])

        if(winnerFound){
            setWinner(winnerFound)
            
            player ? setScores([scores[0] +1 , scores[1]]) : setScores([scores[0], scores[1] + 1])
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
            <h2>{player ? "Player One [ X ]" : "Player Two [ O ]"}{boardWinnerFound ? "  WON!!!!!" : ''} </h2>
            <div className="game_container">
                <div className="score_container">
                    <h1>Player 1</h1>
                        <h3>{scores[0]}</h3>
                </div>
                <div className="grid">
                    {board.map(generateTile)}
                </div>
                <div className="score_container">
                    <h1>Player 2 </h1>
                    <h3>{scores[1]}</h3>
                </div>
            </div>
        </>
    );
}

export default Board;