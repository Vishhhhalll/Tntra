import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [counter, setcounter] = useState(100);

  return (
    <>
      <div>This count is {count+1}</div>
      <button onClick={() => setCount(count+1)}>Update count {count+1}</button>
      
      <div>This count is {counter-1}</div>
      <button onClick={() => setcounter(counter-1)}>Update count {counter-1}</button>
    </>
  )
}

export default App
