import Form from "./Form"
import ControlButtons from "./ControlButtons"

export default function Sidebar({ input, setInput, generateQR, codeArray, resetAll }) {
    return (
        <div className="sidebar">
            <h1>QR Code Generator</h1>
            <Form input={input} setInput={setInput} generateQR={generateQR} />
            {codeArray.length > 0 && <ControlButtons resetAll={resetAll} />}
        </div>
    )
}