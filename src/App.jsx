import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="p-10 bg-amber-400 text-center font-bold ">
        Esto es un test para ver si funciona Tailwind CSS
      </p>
    </>
  )
}

export default App
