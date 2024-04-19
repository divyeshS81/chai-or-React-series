import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username : "Divyesh",
    age: 21
  }
  let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username = "chai aur react" btnText = "click me"/>
      <Card username = "Divyesh" btnText = "visit me"/>
    </>
  )
}

export default App
