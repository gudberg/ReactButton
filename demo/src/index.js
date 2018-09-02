import React, {Component} from 'react'
import {render} from 'react-dom'
import Button from '../../src'
import './demo.css'

class Demo extends Component {
  
  render() {
    return (  
     <div>
        <h1>neat-react-button</h1>
        <Button
          text={'Submit'} 
          onClick={() => {}}
          color={"primary"}
        />

      <Button
        text={'Anchor Tag'}
        color={'info'}
        href={'http://www.bbc.com/'}
        onClick={() => {}}
      />
    </div>
  )
  }
}

render(<Demo/>, document.querySelector('#demo'))
