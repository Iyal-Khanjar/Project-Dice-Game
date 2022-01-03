import React from 'react'

function DiceNum6(props) {
    return (
        <div className='dices'>
            <div className='dice1'>
                <img src={props.dice6} alt="dice6" />
            </div>
            <div className='dice2'>
                <img src={props.dice6} alt="dice6" />
            </div>
        </div>
    )
}

export default DiceNum6
