
import React, { useState, useEffect } from 'react';

function Colors() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  });

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change to Blue</button>
    </div>
  );
}

export default Colors;
