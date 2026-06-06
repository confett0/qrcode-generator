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
      <h1 className="site-title">QR Code Generator</h1>
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
