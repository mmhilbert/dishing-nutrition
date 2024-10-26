import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
      <main className='bg-cream h-full'>
        <Outlet />
      </main>
    <Footer />
     
    </>
  )
}

export default App
