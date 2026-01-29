import { useState } from 'react'
import Form from './components/Form'
import QRgrid from './components/QRgrid'
import inputParser from './inputParser'
import './App.css'

function App() {

  const [input, setInput] = useState("")
  const [codeArray, setCodeArray] = useState([])

  const generateQR = (e) => {
    e.preventDefault()
    setCodeArray(inputParser(input))
  }

  return (
    <>
      <Form input={input} setInput={setInput} generateQR={generateQR} />
      <QRgrid codeArray={codeArray} />
    </>
  )
}

export default App
