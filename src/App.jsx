import { useState } from 'react'
import Input from './components/Input'
import inputParser from './inputParser'
import {QRCodeSVG} from 'qrcode.react';

import './App.css'

function App() {

  const [input, setInput] = useState("")
  console.log(input)

  const codeArray = inputParser(input)

  console.log(codeArray)

  return (
    <>
      <Input input={input} setInput={setInput}/>
    </>
  )
}

export default App
