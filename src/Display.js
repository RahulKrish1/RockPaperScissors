import React from 'react';

const Display = ({ image}) => {
  return (
    <div className="display">
      <img src={image} alt="User Choice" />
    </div>
  );
};

export default Display;