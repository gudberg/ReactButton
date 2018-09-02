import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styles from './index.css'
import _ from 'lodash'


const propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  element: PropTypes.string,
  text: PropTypes.string,  
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  text: 'default text',
  size: 'md',
  color: 'success',
  element: 'button',
  disabled: false,
  onClick: () => {}
};

class Button extends Component { 
  
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  
  render() {
    let {
      color,
      size,
      text, 
      disabled,
      element: Element,
      ...rest
    } = this.props

    // Turns into button if the prop has a link and is marked as button
    if (rest.href && Element === 'button') {
      Element = 'a';
    }

    // Changes the fontcolor if it is info
    if(color === 'info') {
      var fontColor = 'fontColor'
    }

    return(
      <Element
        type={(Element === 'button' && rest.onClick) ? 'button' : undefined}
        {...rest}
        className={`${color} ${fontColor} ${disabled ? 'disabled': null} ${size} button`}
        onClick={this.onClick}
      >
        {text}
      </Element>
    )
  } 
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button