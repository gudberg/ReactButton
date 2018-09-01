import React, {Component} from 'react'
import {render} from 'react-dom'
import Button from '../../src'
import './demo.css'

class Demo extends Component {
  
  render() {
    return (  
     <div>
        <h1>react-button Demo</h1>
        <Button
          text={'Submit'} 
          onClick={() => {}}
        />

      <Button
        text={'Cancel'}
        color={'info'}
        href={'http://www.bbc.com/'}
        onClick={() => {}}
      />
    </div>
  )
  }
}

render(<Demo/>, document.querySelector('#demo'))
