import React from 'react';

const Buttons = ({ imagePath, onClick}) => {
 
  return (
    <button className="button" onClick={() => onClick(imagePath)}>
      <img src={imagePath} alt={`Button`} />
    </button>
  );
};

export default Buttons;