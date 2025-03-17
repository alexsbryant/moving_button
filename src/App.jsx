import React, { useState } from 'react';
import './app.css'


const App = () => {

  const [position, setPosition] = useState({x: 0, y: 0});

  const handleMove = () => {
    let randomX = Math.floor(Math.random() * 700);
    let randomY = Math.floor(Math.random() * 500);
    setPosition({x: {randomX}, y: {randomY}})
  };

  return (
    <div>
      <button 
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y
        }}
      > Click me then... </button>
    </div>
  )
}

export default App