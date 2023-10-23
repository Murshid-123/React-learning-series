import { useCallback, useState ,useRef ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  const copypasswortoclipboard = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select()
  }

  const generatePassword = useCallback(()=>{

    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) {
      str+= '0123456789'
    }
    if (charAllowed) {
      str+='!@#$%^&*()-_+=;:'
    }
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(random) 
    }

    (()=>{setPassword(pass)}) ()

  },[length,numberAllowed,charAllowed])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])

  const passwordRef = useRef(null)


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded px-4 py-3 my-8 bg-gray-800 text-orange-800 '>
      <h1 className='text-white text-center my-3'>
        Password generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
        <button className=' bg-blue-500 text-white px-2 py-1 rounded-r-md  hover:bg-blue-600 outline-none shrink-0' 
          onClick={copypasswortoclipboard}>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-4'>
        <div className='flex text-sm gap-x-1 items-center'>
          <input type="range" min={6} max={100} value={length} onChange={(e)=>setLength(e.target.value)} className=' h-1 bg-gray-300 rounded-full'/>
          <label htmlFor="" className='text-white'>length : {length}</label>
        </div>
        <div className='text-white flex text-sm gap-x-4'> 
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)}/>
          <label htmlFor="">Number</label>
          <input type="checkbox" defaultChecked={charAllowed} onChange={()=>setCharAllowed((prev)=>!prev)}/>
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </div>
        
    </>
  )
}

export default App