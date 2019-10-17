import React, {useState, useEffect} from 'react'

function Tile(props) {
    //Hooks
    const [tile, setTile] = useState(" ")
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
        <div className = "box">
            <div className = {!beenClicked ? "card" : "card no-hover"}>
              <div onClick={onClick} className = "content">
                <div className = "front">
                    {tile}
                </div>
                <div className = "back">
                    <p>{props.player ? 'X' : 'O'}</p>
                </div>
              </div>
            </div>
        </div> 
    );
}

export default Tile