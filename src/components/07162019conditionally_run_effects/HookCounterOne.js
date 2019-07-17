import React, { useState, useEffect } from 'react'

function HookCounterOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  // useEffect run every render
  useEffect(() => {
    console.log('Hook Counter Update document title');
    document.title = `You click ${count} times`
  }, [count])

  return(
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Hook Counter Click {count} times</button>
    </div>
  )
}

export default HookCounterOne
