import { useState } from 'react'
import Input from './components/Input'
import QRgrid from './components/QRgrid'
import inputParser from './inputParser'

import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [codeArray, setCodeArray] = useState([])

  const generateQR = () => setCodeArray(inputParser(input))

  console.log(codeArray)

  return (
    <>
      <Input input={input} setInput={setInput}/>
      <button onClick={generateQR}>Generate</button>
      <QRgrid codeArray={codeArray} />
    </>
  )
}

export default App
