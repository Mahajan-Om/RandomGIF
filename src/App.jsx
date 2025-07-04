import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
        <h1 className="bg-white rounded-lg uppercase w-11/12 text-center mt-[40px] ml-[15px] py-2 px-10 text-4xl font-bold ">
          Random Gifs
        </h1>
        <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
          <Random />
          <Tag />
        </div>
      </div>
    </div>
  )
}

export default App
