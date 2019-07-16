import React, { useState, useEffect } from 'react'

function HookCounterOne() {
  const [count, setCount] = useState(0)

  // useEffect run every render
  useEffect(() => {
    document.title = `You click ${count} times`
  })

  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Hook Counter Click {count} times</button>
    </div>
  )
}

export default HookCounterOne
