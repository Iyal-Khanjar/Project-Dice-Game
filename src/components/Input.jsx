import React from 'react'

function Input(props) {
    return (
        <div>
        <input type="text" value={props.numberToWin} onChange={props.input} />
    </div>
    )
}

export default Input
