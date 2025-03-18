import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [size, setSize] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let passw = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(num) str += '0123456789'
    if(char) str += '!@#$%^&*()_+'

    for(let i = 1; i <= size; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      passw += str.charAt(char)
    }
    setPass(passw)
  }, [size, num, char, setPass])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => {generatePassword()}, [size, num, char, generatePassword])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Random Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-6 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text"
          value={pass}
          className="outline-none w-full py-1 px-3 bg-white text-gray-800"
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 cursor-pointer'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={size}
            className='cursor-pointer'
            onChange={(e) => setSize(e.target.value)}
            />
            <label>Size: {size}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              id='numInput'
              onChange={() => setNum((prev) => !prev)}
            />
            <label htmlFor='numInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id='charInput'
              onChange={() => setChar((prev) => !prev)}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
