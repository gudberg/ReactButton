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
          color={'success'}
          onClick={() => {}}
          element={'button'}
        />

      <Button
        text={'Sigurbjörg'}
        color={'info'}
        href={'http://www.bbc.com/'}
        onClick={() => {}}
        disabled={false}
      />
    </div>
  )
  }
}

render(<Demo/>, document.querySelector('#demo'))
