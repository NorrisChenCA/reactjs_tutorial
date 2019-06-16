import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered { count } times</h2>
      </div>
    )
  }
}
// 2 is the incrementNumber, pass to withCounter as parameter
export default withCounter(HoverCounter, 2)
