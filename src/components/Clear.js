import React from 'react';
import './Clear.css';

class Clear extends React.Component {
  render() {
    return (
        <div className="clear">
            {this.props.children}
        </div> )
    }
}

export default Clear;