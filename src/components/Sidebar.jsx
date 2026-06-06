import Form from "./Form";
import ControlButtons from "./ControlButtons";

export default function Sidebar({
  input,
  setInput,
  generateQR,
  codeArray,
  resetAll,
  gridSettings,
  handleChange,
}) {
  return (
    <div className="sidebar">
      <h1>QR Code Generator</h1>
      <p>Inserisci un codice per riga e clicca Genera QR</p>
      <Form
        input={input}
        setInput={setInput}
        generateQR={generateQR}
        gridSettings={gridSettings}
        handleChange={handleChange}
      />
      {codeArray.length > 0 && <ControlButtons resetAll={resetAll} />}
    </div>
  );
}
