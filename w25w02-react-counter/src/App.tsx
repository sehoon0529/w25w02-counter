import './App.css'
import { useState } from 'react'





function App() {
  const [count, setCount] = useState(0)
  return (

    <div>
      <h1>카운터 {count} </h1>
      <button onClick={() => {
        setCount(prev => prev + 1)
      }} >증가</button>
    </div>
  )
}

export default App
