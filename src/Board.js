import React, {useState, useEffect} from 'react'
import Tile from './Tile.js'

function Board() {
    //Hooks
    const [player, setPlayer] = useState(true)
    const [p1Moves, setP1] = useState([])
    const [p2Moves, setP2] = useState([])
    
    //Constants
    const board = Array(9).fill(null)
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[3,5,8],[0,4,8],[2,4,6]]
    
    //Game Logic
    const hasWon = (playerTurn, index) => !!winConditions.filter(wincondition => wincondition.every(winNum => [...playerTurn, index].includes(winNum))).length
    const switchPlayer = index => {
        player ? setP1([...p1Moves,index]) : setP2([...p2Moves,index])
        
        const won1 = hasWon(p1Moves, index)
        console.log("p1 won?",won1)
        const won2 = hasWon(p2Moves, index)
        console.log("p2 won?",won2)
        
        setPlayer(!player)
    }
    
    //Board Generation
    const generateTile = (elm, ind) => (
        <Tile handleClick={switchPlayer} player={player} index={ind} key={ind}/>
    )
    
    //Delete me later
    useEffect(()=> console.log("Player1 ::",p1Moves,"  Player2 ::",p2Moves))
    
    return (
        <div className="App">
            <h2>{player ? "Player One" : "Player Two"}</h2>
            {board.map(generateTile)}
        </div>
    );
}

export default Board;