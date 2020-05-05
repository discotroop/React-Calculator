import React from 'react';
import './App.css';
import Button from './components/Button.js'
import Input from './components/Input.js'
import Clear from './components/Clear.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      Operator: ""
    }
  }
  addToInput = val => {
    this.setState({ input: this.state.input + val })
  }
  render() {
   return (
    <div className="App">
      <div className="calc-container">
        <div className="row">
          <Input> {this.state.input} </Input>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button>
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
