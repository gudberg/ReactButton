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
          text={'Small Submit'} 
          onClick={() => {}}
          size={"sm"}
          btntype={"reset"}
        />
      
      <Button
        text={'Anchor Tag'}
        color={'info'}
        href={'http://www.bbc.com/'}
        onClick={() => {}}
      />

      <Button
        text={'Success Button'}
        color={'success'}
      />

      <Button
        text={'Danger Button'}
        color={'danger'}
      />

      <Button
        text={'Disabled Tag'}
        color={'info'}
        href={'http://www.bbc.com/'}
        disabled={true}
      />
    </div>
  )
  }
}

render(<Demo/>, document.querySelector('#demo'))
