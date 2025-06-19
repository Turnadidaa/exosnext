// src/Components/Events.js
import React, { useState } from 'react';

function Events() {
  // Partie I : Bouton simple
  const clickMe = () => {
    alert('I was clicked');
  };

  // Partie II : Touche Entrée
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You typed: ${event.target.value}`);
    }
  };

  // Partie III : Toggle ON/OFF
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleToggle = () => {
    setIsToggleOn((prev) => !prev);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Bouton "Click Me" */}
      <button onClick={clickMe}>Click Me</button>

      <br /><br />

      {/* Champ de saisie */}
      <input
        type="text"
        placeholder="Type and press Enter"
        onKeyDown={handleKeyDown}
      />

      <br /><br />

      {/* Bouton Toggle */}
      <button onClick={handleToggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
