import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

/*
  const tick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
  }, [count])
*/

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    function doSomething() {
      console.log('something');
    }
    doSomething()
    const interval = setInterval(tick, 1000)
  }, ['something'])

  return (
    <div>{count}</div>
  )
}

export default IntervalHookCounter
