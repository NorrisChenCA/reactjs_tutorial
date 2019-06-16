import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0
      }
    }

    incrementCount = () => {
      this.setState(prevState => {
        return {count: prevState.count + incrementNumber}
      })
    }
    render() {
      console.log(this.props.name)
      // {...this.props} is pass all the props to wrapped component
      return <WrappedComponent
              count={this.state.count}
              incrementCount={this.incrementCount}
              {...this.props}
              />
    }
  }
  return NewComponent
}

export default withCounter
