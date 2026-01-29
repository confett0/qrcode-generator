import { use, useState } from 'react'
import Input from './components/Input'
import codeParser from './codeParser'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  console.log(input)

  const codeArray = codeParser(input);

  console.log(codeArray)

  return (
    <>
      <Input input={input} setInput={setInput}/>
    </>
  )
}

export default App
