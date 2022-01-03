import React from 'react'

function Input(props) {
    return (
        <div>
            <input type="text" value={props.numberToWin} onChange={(e)=>props.input(e)} disabled={props.inputDisabled} />
        </div>
    )
}

export default Input
