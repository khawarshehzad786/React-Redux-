/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Child1 from './components/Child1'
const App = () => {
  const [val, setVal] = useState(1)
  return (
    <div>App
      <Child1 value={val}/>
    </div>
  )
}

export default App