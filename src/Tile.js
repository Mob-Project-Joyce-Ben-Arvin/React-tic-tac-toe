import React, {useState, useEffect} from 'react'

function Tile(props) {
    //Hooks
    const [tile, setTile] = useState(props.index)
    const [beenClicked, setClick] = useState(false)
    
    //Logic
    const onClick = _ => {
        if(!beenClicked){
            props.handleClick(props.index)
            setTile(props.player ? 'X' : 'O')
            setClick(true)
        }
    }
    
    return (
        <>
            <h2 onClick={onClick}>{tile}</h2>
        </>
    );
}

export default Tile