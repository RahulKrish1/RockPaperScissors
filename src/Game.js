import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import Display from './Display';
import Rules from './Rules';
import './Game.css';
import iconScissors from './icon-scissors.svg';
import iconRock from './icon-rock.svg';
import iconPaper from './icon-paper.svg';

const Game = () => {
    const [Choice, setChoice] = useState('');
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [displayedButton, setDisplayedButton] = useState(null);
    const [Score, setScore] = useState(0);
    const [gameResult, setGameResult] = useState('');
    const [showRules, setShowRules] = useState(false);
    
    const getButtonBorderColor = (buttonValue) => {
        switch (buttonValue) {
          case iconScissors:
            return 'hsl(40, 84%, 53%)';
          case iconRock:
            return 'hsl(349, 70%, 56%)';
          case iconPaper:
            return 'hsl(230, 89%, 65%)';
          default:
            return 'transparent';
        }
      };

    const handleClick = (value) => {
        setChoice(value);
        setButtonsVisible(false);
        const randomButtonValue = [iconRock, iconScissors, iconPaper][Math.floor(Math.random() * 3)];
        setDisplayedButton(randomButtonValue);
        gameLogic(value, randomButtonValue);
      };

      const gameLogic = (button1, button2) => {
        if (
          (button1 === iconRock && button2 === iconScissors) ||
          (button1 === iconScissors && button2 === iconPaper) ||
          (button1 === iconPaper && button2 === iconRock)
        ) {
          setScore(Score + 1);
          setGameResult('YOU WIN');
        } else if (
          (button2 === iconRock && button1 === iconScissors) ||
          (button2 === iconScissors && button1 === iconPaper) ||
          (button2 === iconPaper && button1 === iconRock)
        ) {
          setGameResult('YOU LOSE');
        } else {
          setGameResult('IT\'S A TIE');
        }
      };

      return (
        <div className="game">
          {showRules && <div className="blurred-background" />}
          <div className="header"> 
            <h1>ROCK<br/>PAPER<br/>SCISSORS<br/></h1>
            <text>SCORE <br/><span className="score">{Score}</span><br/></text>
          </div>      
          <div className="buttons">
            {buttonsVisible && (
               <div className="button-container">
                 <Buttons value="1" onClick={handleClick} imagePath={iconScissors} />
                 <Buttons value="2" onClick={handleClick} imagePath={iconRock} />
                 <Buttons value="3" onClick={handleClick} imagePath={iconPaper} />
               </div>
            )}
            <button className="Rules-button" onClick={() => setShowRules(true)}>Rules</button>
          </div>
          <div className="display">
            {!buttonsVisible && !showRules && (
             <div className="display-container">
             <div className="choice-container">
               <div className="choice" style={{ borderColor: getButtonBorderColor(Choice) }}>
                 <Display image={Choice} />
               </div>
               {displayedButton && (
                 <div className="displayed-image" style={{ borderColor: getButtonBorderColor(displayedButton) }}>
                   <img src={displayedButton} alt={displayedButton} />
                 </div>
               )}
               <text className='result'>
                {gameResult && (
                <span>{gameResult}</span>
                )}
                </text>
                <text className='userPick'>
                    YOU PICKED
                </text>
                <text className='housePick'>
                    THE HOUSE PICKED
                </text>
                {!buttonsVisible && (
                <button className="restore-button" onClick={() => setButtonsVisible(true)}>PLAY AGAIN</button>
                )}
             </div>
           </div>
            )}
            {showRules && <Rules onClose={() => setShowRules(false)} />}
          </div>
        </div>
      );
    };

export default Game;