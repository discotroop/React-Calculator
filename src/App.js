import React from 'react';
import './App.css';
import Button from './components/Button.js'
import Input from './components/Input.js'

function App() {
  return (
    <div className="App">
      <div class="calc-container">
        <div class="row">
          <Input></Input>
        </div>
        <div class="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>/</Button>
        </div>
        <div class="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button>
        </div>
        <div class="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>+</Button>
        </div>
        <div class="row">
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
