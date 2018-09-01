import React, {Component} from 'react'
import styles from './index.css'

class Button extends Component { 
  
  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    
    if(this.props.disabled) {
      e.preventDefault()
      return
    }

    if(this.props.onClick) {
      this.props.onClick(e);
    }
  }
  
  render() {
    let {
      size,
      type,
      text, 
      disabled,
      tag: Tag,
      ...rest
    } = this.props

    if (rest.href && Tag === 'button') {
      Tag = 'a';
    }

    return(
      <Tag
        type={(Tag === 'button' && rest.onClick) ? 'button' : undefined}
        {...rest}
        className={`${type} ${disabled ? 'disabled': null} ${size} button`}
        onClick={this.onClick}
      >
      {text}
      </Tag>
    )
  }
  
}

Button.defaultProps = {
  size: 'medium',
  type: 'primary',
  tag: 'button',
  onClick: () => {}
}

export default Button