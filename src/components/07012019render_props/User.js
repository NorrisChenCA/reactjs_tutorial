import React, { Component } from 'react'

// User component is example for render props
class User extends Component {
  render() {
    return (
      <div>
        {this.props.name(true)}
      </div>
    )
  }
}

export default User
