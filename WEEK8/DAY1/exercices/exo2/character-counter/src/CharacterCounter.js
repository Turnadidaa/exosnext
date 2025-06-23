
import React, { useRef, useState, useEffect } from 'react';

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleInput = () => {
      setCount(inputRef.current.value.length);
    };

    const inputEl = inputRef.current;
    inputEl.addEventListener('input', handleInput);

    // Nettoyage de l'événement pour éviter les fuites mémoire
    return () => {
      inputEl.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Character Counter</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Tape ici..."
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <p>Nombre de caractères : {count}</p>
    </div>
  );
};

export default CharacterCounter;
