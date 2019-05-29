import React, { Component } from 'react'

import LifecycleB from './LifecycleB'

class LifecycleA extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: 'Vishwas'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount(){
    console.log('LifecycleA componentDidMount')
  }

  // component updating lifecyle methods -- begin
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }
  // component updating lifecyle methods -- end

  changeState = () => {
    console.log('change the states');
    this.setState ({
      name: 'codeVolution'
    })
  }

  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
