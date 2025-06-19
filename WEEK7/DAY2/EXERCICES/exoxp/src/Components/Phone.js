// src/Components/Phone.js
import React, { useState } from 'react';

function Phone() {
  // Déclaration des variables d'état
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  // Fonction pour changer la couleur
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h2>Brand: {brand}</h2>
      <h3>Model: {model}</h3>
      <p>Color: {color}</p>
      <p>Year: {year}</p>

      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Phone;
