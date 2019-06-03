import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
    {/*<div> this div replace by Fragment tab, then in the whole Dom. */}
    {/*
      <div className="App">
        without extra <div> here
        <h1>Fragment Demos</h1>
        <p>This decribes the Fragment Demo component</p>
      </div>
    */}
      <h1>Fragment Demos</h1>
      <p>This decribes the Fragment Demo component</p>
    {/*</div> this div replace by Fragment tab*/}
    </React.Fragment>
  )
}

export default FragmentDemo
