import './App.css';
import Die from './Die';
import { useState } from 'react';

const RollDice = () => {
    const [die1, setDie1] = useState('');
    const [die2, setDie2] = useState('');

    const generateNumbers = () => {
        let roll1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        setDie1(roll1);

        let roll2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        setDie2(roll2)
    };

    return (
        <>
            <section id='diceContainer'>
            <Die number={die1}/>
            <Die number={die2}/>
                 {/* <div id='dieOne'></div>
                 <div id='dieTwo'></div> 
                 <i class="fas fa-dice-one"></i>  */}
            </section>

            <section id='buttonContainer'>
                <button onClick={generateNumbers}>Roll Dice</button>
            </section>
        </>
    );
};

export default RollDice;