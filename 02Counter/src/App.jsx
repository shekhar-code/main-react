import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const Addvalue = () => {
    if(count < 20) setCount(count+1)
  }

  const removevalue = () => {
    if(count > 0) setCount(count-1)
  }

  return (
    <>
      
      <h1>Counter : {count}</h1>
      <div className="card">
        <button onClick={Addvalue}>
          addvalue {count}
        </button>
        <br/>

        <button onClick={removevalue}>
          removevalue {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
