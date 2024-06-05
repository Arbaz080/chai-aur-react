import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

   const addValue = () =>{
      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
    }


   const removeValue = () =>{
        setCounter(counter - 1)
   }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
