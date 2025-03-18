import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Imglist from '../components/imglist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
    <Imglist username="utsav"/>
    <br />
    <Imglist username="jha"/>
    </>
  )
}

export default App