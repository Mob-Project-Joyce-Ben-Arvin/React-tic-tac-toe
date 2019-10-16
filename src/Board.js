import React, {useState} from 'react'
import Tile from './Tile.js'

function Board() {
    const [player, setPlayer] = useState(true)
    const switchPlayer = _ => setPlayer(!player)
  return (
    <div className="App">
        <h2>{player ? "Player One" : "Player Two"}</h2>
        <Tile handleClick={switchPlayer}/>
    </div>
  );
}

export default Board;