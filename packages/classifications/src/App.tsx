import React from 'react';
import ClassificationComponent from "./components/Classification/ClassificationComponent";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassificationComponent type={"RECEIVER"}/>

      </header>
    </div>
  );
}

export default App;
