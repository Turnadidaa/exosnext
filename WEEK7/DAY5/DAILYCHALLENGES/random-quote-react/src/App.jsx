import { useState, useEffect } from 'react';
import { quotes } from './quotes';
import './App.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  return '#' + Array.from({ length: 6 })
    .map(() => letters[Math.floor(Math.random() * 16)])
    .join('');
}

function App() {
  const [quoteIndex, setQuoteIndex] = useState(null);
  const [usedIndices, setUsedIndices] = useState([]);
  const [bgColor, setBgColor] = useState('#ffffff');

  const generateQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (usedIndices.includes(newIndex) && usedIndices.length < quotes.length);

    setQuoteIndex(newIndex);
    setUsedIndices(prev => [...prev, newIndex]);
    setBgColor(getRandomColor());
  };

  useEffect(() => {
    generateQuote(); // Generate on first load
  }, []);

  if (quoteIndex === null) return null;

  const { quote, author } = quotes[quoteIndex];

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="quote-box">
        <h1 style={{ color: bgColor }}>{quote}</h1>
        <p>— {author}</p>
        <button
          onClick={generateQuote}
          style={{ backgroundColor: bgColor }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
