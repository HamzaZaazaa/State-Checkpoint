import React, { Component } from 'react'
import pict from "../Thisisme.jpg"

export class ShowContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        fullName:"Hamza Zaazaa", 
        bio:"Hello World", 
        profession:"Editor",
        time : new Date(),
      }
      }
    componentDidMount() {
        this.timeNow = setInterval(()=> {
          this.setState({time : new Date()})
        }, 1000)
      }
    componentWillUnmount(){
        clearInterval(this.timeNow) 
    }
  render() {
    return (
      <div>
          <img src={pict}></img>
        <h1>{this.state.fullName}</h1>
        <h2>{this.state.profession}</h2>
        <h3>{this.state.bio}</h3>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }
}
