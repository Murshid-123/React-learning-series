import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#c1db79")

  return (
   <div className='w-full h-screen duration-200 flex justify-center' style={{background : color}}>
    
      <div className='fixed bottom-12 flex flex-wrap justify-center  gap-3  shadow-2xl px-3 py-2 rounded-3xl bg-slate-100' >

        <button
        className='outline-none px-4 py-1 rounded-full text-black shadow-2xl' style={{background : 'blue'}} onClick={()=>setColor('blue')}
        >Blue</button>

        <button
        className='outline-none px-4 py-1 rounded-full text-black shadow-2xl' style={{background : 'red'}} onClick={()=>setColor('red')}
        >Red</button>

      </div>

   </div>
  )
}

export default App
