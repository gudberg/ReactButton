import React, {Component} from 'react'
import {render} from 'react-dom'
import Button from '../../src'

class Demo extends Component {
  render() {
    return (
     
     <div>
        <h1>react-button Demo</h1>
        <Button
        text={'Submit'} 
        type={'success'}
        tag={'a'}
        href={'http://www.bbc.com/'}
        onClick={() => {}}
        disabled={true}
      />

      <Button
        size={'medium'}
        text={'Cancel'}
        type={'ded'}
        tag={'button'}
    />
    </div>
  )
  }
}

render(<Demo/>, document.querySelector('#demo'))
