import React from 'react';
import './Rules.css';
import RulesImg from './image-rules.svg';

const Rules = ({ onClose }) => {
  return (
      <div className='rules'>
          <h1 className='header1'>Rules</h1>
          <div className="image-container">
            <img className='RulesImg' src={RulesImg} alt="RulesImg" />
          </div>
          <button className="exit-button" onClick={onClose}>X</button>
      </div>
  );
};

export default Rules;