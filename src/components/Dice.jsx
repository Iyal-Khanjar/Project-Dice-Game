import React, { useState } from 'react'
import Btns from './Btns'
import DiceNum6 from './DiceNum6'
import DicesRoll from './DicesRoll'

import dice1 from './img/dice1.png'
import dice2 from './img/dice2.png'
import dice3 from './img/dice3.png'
import dice4 from './img/dice4.png'
import dice5 from './img/dice5.png'
import dice6 from './img/dice6.png'

import Input from './Input'



function Dice() {
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
        setRoundPlayer1(0)
        setRoundPlayer2(0)
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

    return (
        <div className='container'>
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
            <div className='conatinerForDiceAndBtns'>
                {showDice ? <DicesRoll rollOne={rollOne} rollTwo={rollTwo} dice1={dice1} dice2={dice2} dice3={dice3} dice4={dice4} dice5={dice5} dice6={dice6} />
                    : <DiceNum6 dice6={dice6} />
                }
                <div className="inputAndBtns">
                    {
                        <div className='playerTurn'>
                            {playerturn}`s turn
                        </div>
                    }
                    <Input type='text' numberToWin={numberToWin} input={input} inputDisabled={inputDisabled} />
                    <Btns rollDice={rollDice} disabled={disabled} hold={hold} restart={restart} />
                </div>
            </div>
        </div >
    )
}

export default Dice
