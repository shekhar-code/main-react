// import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  
  // let myobj = {
  //   username: "user",
  //   btnText: "click me"
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="elon" btnText='click' />
    </>
  )
}

export default App
