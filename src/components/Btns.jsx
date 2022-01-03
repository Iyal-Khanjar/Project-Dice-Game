import React from 'react'

function Btns(props) {
    return (
        <div className='btns'>
            <div className='btnRollDice'>
                <button onClick={props.rollDice} disabled={props.disabled}>Roll Dice</button>
            </div>
            <div className='btnHold'>
                <button onClick={props.hold} disabled={props.disabled}>Hold</button>
            </div>
            <div className='btnRestart'>
                <button onClick={props.restart}>Restart</button>
            </div>
        </div>
    )
}

export default Btns
