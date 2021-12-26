import React, { useState } from 'react'

import dice1 from './img/dice1.png'
import dice2 from './img/dice2.png'
import dice3 from './img/dice3.png'
import dice4 from './img/dice4.png'
import dice5 from './img/dice5.png'
import dice6 from './img/dice6.png'

// import Input from './Input'



function Dice(props) {
    const [rollOne, setRollOne] = useState(null)
    const [rollTwo, setRollTwo] = useState(null)
    const [diceTotalPlayer1, setDiceTotalPlayer1] = useState(0)
    const [diceTotalPlayer2, setDiceTotalPlayer2] = useState(0)
    const [roundPlayer1, setRoundPlayer1] = useState(0)
    const [roundPlayer2, setRoundPlayer2] = useState(0)
    const [showDice, setShowDice] = useState(false)
    const [playerturn, setPlayerturn] = useState('player1')
    const [numberToWin, setNumberToWin] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [inputDisabled, setInputDisabled] = useState(false)

    const rollDice = () => {
        if (numberToWin !== '') {
            setInputDisabled(true)
            setShowDice(true)

            const diceRoll1 = Math.floor(Math.random() * 6) + 1
            const diceRoll2 = Math.floor(Math.random() * 6) + 1

            setRollOne(diceRoll1)
            setRollTwo(diceRoll2)

            if (playerturn === 'player1') {
                if (diceRoll1 === diceRoll2) {
                    setRoundPlayer1(0)
                    setPlayerturn('player2')
                } else {
                    setRoundPlayer1(roundPlayer1 + diceRoll1 + diceRoll2)
                    PlayerWin()
                }
            } else if (playerturn === 'player2') {
                if (diceRoll1 === diceRoll2) {
                    setRoundPlayer2(0)
                    setPlayerturn('player1')
                } else {
                    setRoundPlayer2(roundPlayer2 + diceRoll1 + diceRoll2)
                    PlayerWin()
                }
            }
        } else {
            alert('please insert a number')
        }

    }

    const PlayerWin = () => {
        if (diceTotalPlayer1 >= numberToWin) {
            alert('player1 wins')
            setDisabled(true)
        } else if (diceTotalPlayer2 >= numberToWin) {
            alert('player2 wins')
            setDisabled(true)
        }
    }


    const restart = () => {
        setRollOne(null)
        setRollTwo(null)
        setDiceTotalPlayer1(0)
        setDiceTotalPlayer2(0)
        setShowDice(false)
        setPlayerturn('player1')
        setNumberToWin('')
        setDisabled(false)
        setInputDisabled(false)
    }
    const input = (e) => {
        setNumberToWin(e.target.value)
    }

    const hold = () => {
        setDiceTotalPlayer1(diceTotalPlayer1 + roundPlayer1)
        setDiceTotalPlayer2(diceTotalPlayer2 + roundPlayer2)
        setRoundPlayer1(0)
        setRoundPlayer2(0)
        playerturn === 'player1' ? setPlayerturn('player2') : setPlayerturn('player1')
    }
    console.log(numberToWin);
    return (
        <div>
            <div className="players">
                <div className="totalScores">
                    <div className="player1 ">
                        player1 total score:
                        <div className="score green">
                            {diceTotalPlayer1}
                        </div>
                    </div>
                    <div className="player2 ">
                        player2 total score:
                        <div className="score green">
                            {diceTotalPlayer2}
                        </div>
                    </div>
                </div>
                <div className="currentScore">
                    <div className="player1">
                        player1 current score:
                        <div className="score">
                            {roundPlayer1}
                        </div>
                    </div>
                    <div className="player2">
                        player2 current score:
                        <div className="score">
                            {roundPlayer2}
                        </div>
                    </div>
                </div>
            </div>
            {showDice ? <div className='dices'>
                <div className='dice1'>
                    {
                        rollOne === 1 ?
                            <img src={dice1} alt="dice1" />
                            : rollOne === 2 ?
                                <img src={dice2} alt="dice2" />
                                : rollOne === 3 ?
                                    <img src={dice3} alt="dice3" />
                                    : rollOne === 4 ?
                                        <img src={dice4} alt="dice4" />
                                        : rollOne === 5 ?
                                            <img src={dice5} alt="dice5" />
                                            : <img src={dice6} alt="dice6" />
                    }
                </div>
                <div className='dice2'>
                    {
                        rollTwo === 1 ?
                            <img src={dice1} alt="dice1" />
                            : rollTwo === 2 ?
                                <img src={dice2} alt="dice2" />
                                : rollTwo === 3 ?
                                    <img src={dice3} alt="dice3" />
                                    : rollTwo === 4 ?
                                        <img src={dice4} alt="dice4" />
                                        : rollTwo === 5 ?
                                            <img src={dice5} alt="dice5" />
                                            : <img src={dice6} alt="dice6" />
                    }
                </div>
            </div> : <div className='dices'>
                <div className='dice1'>
                    <img src={dice6} alt="dice6" />
                </div>
                <div className='dice2'>
                    <img src={dice6} alt="dice6" />
                </div>
            </div>
            }
            {
                <div className='playerTurn'>
                    {playerturn}`s turn
                </div>
            }
            {/* <Input type='text' value={numberToWin} onChange={input} /> */}
            <div>
                <input type="text" value={numberToWin} onChange={input} disabled={inputDisabled} />
            </div>
            <div className='btns'>
                <div className='btnRollDice'>
                    <button onClick={rollDice} disabled={disabled}>Roll Dice</button>
                </div>
                <div className='btnHold'>
                    <button onClick={hold} disabled={disabled}>Hold</button>
                </div>
                <div className='btnRestart'>
                    <button onClick={restart}>Restart</button>
                </div>
            </div>
        </div >
    )
}

export default Dice
