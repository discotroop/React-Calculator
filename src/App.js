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
      operator: ""
    }
  }
  addToInput = val => {
    this.setState({ input: this.state.input + val })
  }
  zeroToInput = val => {
    if (this.state.input.length > 0) {
      this.setState({ input: this.state.input + val })
    } else {
      this.setState();
    }
  }
  setOperator = val => {
    if (this.state.previousNumber === "") {
      this.setState({
        previousNumber: this.state.input
      })
    }
    this.setState({ 
      operator: val,
      input: ""
     })
    this.setState();
  }
  parseNumbers = val => {
    if(val.indexOf('.' !== -1)) {
      return parseFloat(val);
    } else {
      return parseInt(val);
    }
  }
  resolveInputs = () => {
    let result = 0;
    let operator = this.state.operator;
    let previous = this.parseNumbers(this.state.previousNumber);
    let current = this.parseNumbers(this.state.input)
    if (this.state.operator === "") {
      return;
    } else {
      if(operator === "+") {
        result = previous + current;
      } else if (operator === "*") {
        result = previous * current;
      } else if (operator === "/") {
        result = previous/current;
      } else if (operator === "-") {
        result = previous - current;
      }
    }
    this.setState({
      input: "",
      previousNumber: result.toString(),
      operator: ""
    })
  }
  clearInput = val => {
    this.setState({ input: ""});
  }
  
  render() {
   return (
    <div className="App">
      <div className="calc-container">
        <div className="row">
          <Input input={this.state.input} previousInput={this.state.previousNumber + " " + this.state.operator}></Input>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.setOperator}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.setOperator}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.setOperator}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.zeroToInput}>0</Button>
          <Button handleClick={this.resolveInputs}>=</Button>
          <Button handleClick={this.setOperator}>-</Button>
        </div>
        <div className="row">
          <Clear handleClick={this.clearInput}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}
}

export default App;
