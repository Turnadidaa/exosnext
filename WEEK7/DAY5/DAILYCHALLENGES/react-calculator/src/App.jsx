import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = 0;

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers.');
      return;
    }

    switch (operation) {
      case 'add':
        res = a + b;
        break;
      case 'subtract':
        res = a - b;
        break;
      case 'multiply':
        res = a * b;
        break;
      case 'divide':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }

    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Addition (+)</option>
        <option value="subtract">Subtraction (−)</option>
        <option value="multiply">Multiplication (×)</option>
        <option value="divide">Division (÷)</option>
      </select>

      <button onClick={calculate}>Calculate</button>

      {result !== null && (
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
