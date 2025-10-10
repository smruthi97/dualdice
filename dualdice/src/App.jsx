import { useState } from 'react'
// Custom hook to handle player turns
import { useTogglePlayer } from './hook/useToggleplayer';
import './App.css'

function App() {
  // Dice values for both dice
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  // Scores for both players
  const [score1,setScore1] = useState(0);
  const [score2,setScore2] = useState(0); 

  // Player turn control using custom hook
  const{ currentPlayer,togglePlayer,resetPlayer }= useTogglePlayer();
 
  // Function to convert numbers to real dice faces
  const getDiceFace = (value) => String.fromCodePoint(0x2680 + (value - 1));

  // Function to roll the dice
  const rollDice = () => {
    const diceEls = document.querySelectorAll(".dice1, .dice2");
    diceEls.forEach((el) => el.classList.add("roll"));


    setTimeout(() => {
      // Remove the rolling animation from dice after 0.5s
      diceEls.forEach((el) => el.classList.remove("roll"));
      // Generate a random number between 1-6 for each dice
      const  value1=Math.floor(Math.random() * 6) + 1
       // Update first dice value
      setDice1(value1);
      const value2 = Math.floor(Math.random() * 6) + 1
      setDice2(value2);
       // Add score to current player
      if ( currentPlayer === 1){
        setScore1 (( value1 + value2 )+ score1 )
      } else{
        setScore2 (( value1 + value2 )+ score2 )
      }
      // Switch player
      togglePlayer();
    }, 500);
  };
  // Reset dice, scores, and turn to start a new game
  const resetGame = () => {
    setDice1(1);
    setDice2(1);
    setScore1(0);
    setScore2(0);
    resetPlayer();

  };
  

  return (
   
    <div>
      {/* Shows Player 1 and Player 2 scores*/}
     <div className='players'>
        <div>
          <h1>Player 1</h1>
          {/*Turns text green and adds “Winner” if score ≥ 50 */}
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
          {/* Displays current player*/}
          <h2>Player {currentPlayer}</h2>
        </div>
        <div className='dice'> 
          {/*Shows two dice faces for the current roll*/}
          <div className={`dice1`} aria-hidden="true">
            <span className="die-face">{getDiceFace(dice1)}</span>
          </div>
          <div className={`dice2`} aria-hidden="true">
            <span className="die-face">{getDiceFace(dice2)}</span>
          </div>
        </div>
        {/* Buttons for game actions */}
        <div className='button'>
          {/* Buttons for game actions */}
          <button className='but1' onClick={rollDice}><h2>Roll Dice</h2></button>
           {/* Switch to other player's turn */}
          <button className='but2' onClick={togglePlayer}><h2>Switch Turn</h2></button>
        </div>
      </div>
      <div className='button2'>
        {/* Reset game to start over */}
        <button className='but3' onClick={resetGame}>
          <h2>New Game</h2>
        </button>
      </div>
    </div>
  )
}

export default App
