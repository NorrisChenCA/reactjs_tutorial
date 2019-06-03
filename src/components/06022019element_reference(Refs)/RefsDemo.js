import React, { Component } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()

    this.callBackRef = null
    this.setCallBackRef = element => {
      this.callBackRef = element
    }
  }

  componentDidMount() {
    this.inputRef.current.focus() // after components mounted, focus on the input element by inputRef
    console.log(this.inputRef);

    if(this.callBackRef) {
      this.callBackRef.value = "this is Callback Ref"
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  clickCallBackHandler = () => {
    alert(this.callBackRef.value);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref={this.inputRef} />
          <button onClick={this.clickHandler}>Click</button>
        </div>
        <div>
          <input type="text" ref={this.setCallBackRef} /> {/* after the component mounted, the element call the callBackRef function with itself as parameter */}
          <button onClick={this.clickCallBackHandler}>Click</button>
        </div>
      </div>
    )
  }
}

export default RefsDemo
