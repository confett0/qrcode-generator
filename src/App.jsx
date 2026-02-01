import { useState } from 'react'
import Sidebar from './components/Sidebar'
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

  const resetAll = () => {
    setInput("")
    setCodeArray([])
  }

  return (
    <>
      <Sidebar input={input} setInput={setInput} generateQR={generateQR} codeArray={codeArray} resetAll={resetAll} />
      <QRgrid codeArray={codeArray} />
    </>
  )
}

export default App
