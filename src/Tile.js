import React, {useState} from 'react'

function Tile(props) {
    const [tile, setTile] = useState(props.index)
    const [beenClicked, setClick] = useState(false)
    const onClick = _ => {
        if(!beenClicked){
            props.handleClick(props.index)
            setTile(props.player ? 'X' : 'O')
            setClick(true)
        }
    }
    
    return (
        <div className="App">
            <h2 onClick={onClick}>{tile}</h2>
        </div>
    );
}

export default Tile