import { useState } from 'react'

import './App.css'

function App() {
  //  const char = String.fromCodePoint(0x267f + 5);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  
  // Function to convert numbers to real dice faces
  const getDiceFace = (value) => String.fromCodePoint(0x2680 + (value - 1));

  // Function to roll the dice
  const rollDice = () => {
    const diceEls = document.querySelectorAll(".dice1, .dice2");
    diceEls.forEach((el) => el.classList.add("roll"));

    setTimeout(() => {
      diceEls.forEach((el) => el.classList.remove("roll"));
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
      
    }, 500);
  };

   
  

  return (
    
    <div>
      <div className='players'>
      <div>
        <h1>Player 1</h1>
        <h2>Score:</h2>
      </div>
      <div>
        <h1>Player 2</h1>
        <h2>Score:</h2>
      </div></div>
      <div className='box'>
      <div className='heading'><h2>{heading}</h2></div>
      <div className='dice'> 
        
    <div className={`dice1`} aria-hidden="true">
      {/* <span className="die-face">{char}</span> */}
      <span className="die-face">{getDiceFace(dice1)}</span>
    </div><div className={`dice2`} aria-hidden="true">
       {/* <span className="die-face">{char}</span> */}
         <span className="die-face">{getDiceFace(dice2)}</span>
    </div>
       

    </div>
      <div className='button'>
        <button className='but1' onClick={rollDice}><h2>Roll Dice</h2></button>
        <button className='but2'><h2>Switch Turn</h2></button>
      </div>
    </div>
      <div className='button2'>
        <button className='but3'>
          <h2>New Game</h2>
        </button>
      </div>
      
      
    </div>
  )
}

export default App
