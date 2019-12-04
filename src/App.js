import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="title">
        <h4>Simon Game</h4>
      </div>
      <div className="game">
        {
          ['green', 'red', 'yellow', 'blue'].map((item, index) => {
            return <div key={index} className={`tiles tile--${item}`}>{index}</div>
          })
        }
      </div>
    </div>
  );
}

export default App;
