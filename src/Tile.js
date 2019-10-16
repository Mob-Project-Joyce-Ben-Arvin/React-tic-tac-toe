import React, {useState} from 'react'

function Tile(props) {
    const [player, setPlayer] = useState(true)
    const onClick = _ => {
        props.handleClick()
        setPlayer(!player)
    }
  return (
    <div className="App">
        <h2>{player ? "X" : "O"}</h2>
        <button onClick={onClick}> Switch Player </button>
    </div>
  );
}

export default Tile