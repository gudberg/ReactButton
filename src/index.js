import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styles from './index.css'
import _ from 'lodash'


const propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  tag: PropTypes.string,
  text: PropTypes.string,  
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  text: 'default text',
  size: 'md',
  type: 'success',
  tag: 'button',
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
      console.log(e)
      this.props.onClick(e);
    }
  }
  
  render() {
    let {
      color,
      size,
      text, 
      disabled,
      tag: Tag,
      ...rest
    } = this.props

    // Turns into button if the prop has a link and is marked as button
    if (rest.href && Tag === 'button') {
      Tag = 'a';
    }

    // Changes the fontcolor if it is info
    if(color === 'info') {
      var fontColor = 'fontColor'
    }

    return(
      <Tag
        type={(Tag === 'button' && rest.onClick) ? 'button' : undefined}
        {...rest}
        className={`${color} ${fontColor} ${disabled ? 'disabled': null} ${size} button`}
        onClick={this.onClick}
      >
        {text}
      </Tag>
    )
  } 
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button