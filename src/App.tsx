import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';

const App:FC = () => {
  return (
    <div className="App">
      <div className="header">
        <input type="text" placeholder="Task..."></input>
        <input type="number" placeholder="Deadline (in Days)"></input>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
