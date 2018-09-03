import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import {injectStyle} from './utils'
import buttonStyles from './buttonStyles'


const propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  element: PropTypes.string,
  text: PropTypes.string,  
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  debounce: PropTypes.number,
  btntype: PropTypes.oneOf(['button', 'reset', 'submit', null]),
}

const defaultProps = {
  btntype: 'button',
  text: 'default text',
  size: 'md',
  color: 'primary',
  element: 'button',
  disabled: false,
  debounce: 0,
  onClick: () => {}
}

class Button extends Component { 
  
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    injectStyle(buttonStyles, 'button-styles')
  }

  //Takes in onClick and returns debounced time(default 500ms)
  debouncing(...args) {
    this.debouncing = debounce(...args);
    return e => {
      e.persist();
      return this.debouncing(e);
    };
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault()
      return
    }

    if (this.props.onClick) {
      console.log("click")
      this.props.onClick(e)
    }
  }

  render() {
    let {
      btntype,
      color,
      size,
      text, 
      disabled,
      element: Element,
      ...rest
    } = this.props

    // Turns into button if the prop has a link and is marked as button
    if (rest.href) {
      Element = 'a';
    }

    // Changes the fontcolor if it is info
    if(color === 'info') {
      var fontColor = 'fontColor'
    }

    if(Element === 'a') {
      return(
        <Element
          {...rest}
          className={`${color} ${fontColor} ${disabled ? 'disabled': null} ${size} button`}
          onClick={this.props.disabled ? (e)=>{e.preventDefault(); return} : this.debouncing(this.onClick, this.props.debounce)}
        >
          {text}
        </Element>
      )
    }

    return(
      <Element
        {...rest}
        btntype={this.props.btntype}
        className={`${color} ${fontColor} ${disabled ? 'disabled': null} ${size} button`}
        onClick={this.props.disabled ? (e)=>{e.preventDefault(); return} : this.debouncing(this.onClick, this.props.debounce)}
        >
        {text}
      </Element>
    )
   
  } 
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
export default Button