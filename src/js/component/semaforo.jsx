import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('red');

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleToggleColor = () => {
    if (color === 'red') {
      setColor('green');
    } else if (color === 'green') {
      setColor('yellow');
    } else if (color === 'yellow') {
      setColor('red');
    }
  };

  const handlePurpleColor = () => {
    setColor('purple');
  };

  return (
    <div className="traffic-light-container">
        <div className={`light ${color === 'red' ? 'red active' : 'red'}`} onClick={() => handleClick('red')}></div>
        <div className={`light ${color === 'yellow' ? 'yellow active' : 'yellow'}`} onClick={() => handleClick('yellow')}></div>
        <div className={`light ${color === 'green' ? 'green active' : 'green'}`} onClick={() => handleClick('green')}></div>
        <button onClick={handleToggleColor}>Alternar color</button>
        <button onClick={handlePurpleColor}>Color extra</button>
    </div>
  );
};

export default TrafficLight;
