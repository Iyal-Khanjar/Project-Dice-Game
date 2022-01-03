import React from 'react'

function DicesRoll(props) {
    return (
        <div className='dices'>
            <div className='dice1'>
                {
                    props.rollOne === 1 ?
                        <img src={props.dice1} alt="dice1" />
                        : props.rollOne === 2 ?
                            <img src={props.dice2} alt="dice2" />
                            : props.rollOne === 3 ?
                                <img src={props.dice3} alt="dice3" />
                                : props.rollOne === 4 ?
                                    <img src={props.dice4} alt="dice4" />
                                    : props.rollOne === 5 ?
                                        <img src={props.dice5} alt="dice5" />
                                        : <img src={props.dice6} alt="dice6" />
                }
            </div>
            <div className='dice2'>
                {
                    props.rollTwo === 1 ?
                        <img src={props.dice1} alt="dice1" />
                        : props.rollTwo === 2 ?
                            <img src={props.dice2} alt="dice2" />
                            : props.rollTwo === 3 ?
                                <img src={props.dice3} alt="dice3" />
                                : props.rollTwo === 4 ?
                                    <img src={props.dice4} alt="dice4" />
                                    : props.rollTwo === 5 ?
                                        <img src={props.dice5} alt="dice5" />
                                        : <img src={props.dice6} alt="dice6" />
                }
            </div>
        </div>
    )
}

export default DicesRoll
