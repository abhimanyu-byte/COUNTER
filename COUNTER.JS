import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount); 


  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialCount);

  return (
    <div style={{
      background: '#f0f8ff',
      padding: '20px',
      borderRadius: '10px',
      display: 'inline-block'
    }}>
      <h2>Count: {count}</h2>

      <button onClick={increase} style={btnStyle}>➕ Increment</button>
      <button onClick={decrease} style={btnStyle}>➖ Decrement</button>
      <button onClick={reset} style={btnStyle}>🔄 Reset</button>
    </div>
  );
};

// Inline button styles
const btnStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white'
};

export default Counter;
