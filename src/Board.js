import React, {useState, useEffect} from 'react'
import Tile from './Tile.js'

function Board() {
    const [player, setPlayer] = useState(true)
    const board = Array(9).fill(null)
    const switchPlayer = index => {
        console.log("Switch player after ",index," was clicked")
        setPlayer(!player)
    }
    const generateTile = (elm, ind) => (
        <Tile handleClick={switchPlayer} player={player} index={ind} key={ind}/>
    )
    
    useEffect(()=> console.log("Player ::",player))
    return (
        <div className="App">
            <h2>{player ? "Player One" : "Player Two"}</h2>
            {board.map(generateTile)}
        </div>
    );
}

export default Board;