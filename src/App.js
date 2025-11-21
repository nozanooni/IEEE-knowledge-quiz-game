// src/App.js
import React from 'react';
import './App.css'; // Import global styles
import Quiz from './components/Quiz'; 

function App() {
  return (
    <div className="App">
      <Quiz />
      <footer>
        <p>Built by Shahenaz Abushanab </p>
        <p >
            All questions and facts are sourced directly from the IEEE KAU Student Branch Booklet.
            </p>
      </footer>
    </div>
  );
}

export default App;