import { useState } from 'react'
import { useTogglePlayer } from './hook/useToggleplayer';
import './App.css'

function App() {
  
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [score1,setScore1] = useState(0);
  const [score2,setScore2] = useState(0);
  
  const{ currentPlayer,togglePlayer,resetPlayer }= useTogglePlayer();
 
  // Function to convert numbers to real dice faces
  const getDiceFace = (value) => String.fromCodePoint(0x2680 + (value - 1));

  // Function to roll the dice
  const rollDice = () => {
    const diceEls = document.querySelectorAll(".dice1, .dice2");
    diceEls.forEach((el) => el.classList.add("roll"));


    setTimeout(() => {
      diceEls.forEach((el) => el.classList.remove("roll"));
      const  value1=Math.floor(Math.random() * 6) + 1
      setDice1(value1);
      const value2 = Math.floor(Math.random() * 6) + 1
      setDice2(value2);
      if ( currentPlayer === 1){
        setScore1 (( value1 + value2 )+ score1 )
      } else{
        setScore2 (( value1 + value2 )+ score2 )
      }
      togglePlayer();
    }, 500);
  };
  const resetGame = () => {
    setDice1(1);
    setDice2(1);
    setScore1(0);
    setScore2(0);
    resetPlayer();

  };
  

  return (
    
    <div>
      <div className='players'>
        <div>
          <h1>Player 1</h1>
          <h2 style={{color:score1>=50 ?'green':''}}> 
            <span>Score: {score1}</span>
            { score1>=50 ?  
              <span> Winner</span>  :''
            }
          </h2>
        </div>
        <div>
          <h1>Player 2</h1>
          <h2 style={{color:score2>=50 ?'green':''}}> 
            <span>Score: {score2}</span>
            { score2>=50 ?
              <span> Winner</span> :''
            }
          </h2>
        </div>
      </div>
      <div className='box'>
        <div className='heading'>
          <h2>Player {currentPlayer}</h2>
        </div>
        <div className='dice'> 
          <div className={`dice1`} aria-hidden="true">
            <span className="die-face">{getDiceFace(dice1)}</span>
          </div>
          <div className={`dice2`} aria-hidden="true">
            <span className="die-face">{getDiceFace(dice2)}</span>
          </div>
        </div>
        <div className='button'>
          <button className='but1' onClick={rollDice}><h2>Roll Dice</h2></button>
          <button className='but2' onClick={togglePlayer}><h2>Switch Turn</h2></button>
        </div>
      </div>
      <div className='button2'>
        <button className='but3' onClick={resetGame}>
          <h2>New Game</h2>
        </button>
      </div>
    </div>
  )
}

export default App
