import React from 'react'

const Player2Box = (props) => {

  return (
    <div className="col-md-4">
    <input type="number" placeholder="Player 2" id="player1" value={props.playerB} 
    onChange={props.setPlayerB} autoComplete='off'/><br /><br />
</div>
  )
}

export default Player2Box