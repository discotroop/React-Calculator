import React from 'react';
import './Input.css';

class Input extends React.Component {
  render() {
    return (
        <div className="input"> 
        <div> {this.props.previousInput}</div>
        <div> {this.props.input} </div> 
        </div> )
    }
}

export default Input;