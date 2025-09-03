// App.jsx
import React from 'react';
import Navbar from './navbar';
import Todo from './todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todo />
    </div>
  );
}

export default App;