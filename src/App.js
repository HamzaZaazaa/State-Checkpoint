import React, { Component } from 'react'
import { ShowContent } from './Components/ShowContent'


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        show : false
    }
}
  render() {
    return (
      <div>
         {this.state.show ? < ShowContent /> : null}
        <button onClick={()=>this.setState({show: !this.state.show})}>Show!
        </button>
        

      </div>
    )
  }
}

