import React, {Component} from 'react'

class Button extends Component {
  
  render() {
    return(
      <div>
        <button style={theme}>{this.props.text}</button>
      </div>
    )
  }
}

Button.defaultProps = {
  theme: {
    color: 'white',
    display: '1.2em 2.9em',
    width: 180,
    fontSize: 14,
    margin: '0 0.5em 1.9em',
    borderRadius: '0.4em',
    boxSizing: 'border-box',
    textDecoration: 'none',
    fontFamily: 'Roboto sans-serif',
    fontWeight: 400,
    color: '#FFFFFF',
    backgroundColor: '#3AA0FF',
    textAlign: 'center',
    position: 'relative',
    border: 'none'
  },
  text: 'Hello'
};




export default Button