import React, { Component } from 'react'

class ClickCounter extends Component {

  render() {
    const { count, incrementCount } = this.props
    //the return element dosen't receive the props from parent "this.props.name" the props goes to withCounter component
    return <button onClick={incrementCount}>{this.props.name}Click {count} times</button>
  }
}

// 1 is the incrementNumber, pass to withCounter as parameter
export default ClickCounter
