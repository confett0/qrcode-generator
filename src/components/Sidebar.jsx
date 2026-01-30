import Form from "./Form"

export default function Sidebar({ input, setInput, generateQR, codeArray }) {
    return (
        <div className="sidebar">
            <h1>QR Code Generator</h1>
            <Form input={input} setInput={setInput} generateQR={generateQR} />
            {codeArray.length > 0 && <button>Print</button>}
        </div>
    )
}