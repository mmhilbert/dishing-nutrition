import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigation } from './components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <main className='bg-cream h-full'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </main>
     
    </>
  )
}

export default App
