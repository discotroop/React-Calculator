import React from 'react';
import './App.css';
import Button from './components/Button.js'
import Input from './components/Input.js'
import Clear from './components/Clear.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "1",
      previousNumber: "",
      currentNumber: "",
      Operator: ""
    }
  }
  addToInput = val => {
    console.log(val);
    this.setState({ input: this.state.input + val })
  }
  render() {
   return (
    <div className="App">
      <div className="calc-container">
        <div className="row">
          <Input input={this.state.input}></Input>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={this.addToInput}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <Clear>Clear</Clear>
        </div>
      </div>
    </div>
  );
}
}

export default App;
