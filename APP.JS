import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🔢 React Counter App</h1>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
