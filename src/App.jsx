import { useState } from "react";
import Sidebar from "./components/Sidebar";
import QRgrid from "./components/QRgrid";
import Footer from "./components/Footer";
import inputParser from "./inputParser";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [codeArray, setCodeArray] = useState([]);
  const [qrSize, setQrSize] = useState(25); // mm

  const generateQR = (e) => {
    e.preventDefault();
    setCodeArray(inputParser(input));
  };

  const resetAll = () => {
    setInput("");
    setCodeArray([]);
  };

  return (
    <>
      <div className="content">
        <Sidebar
          input={input}
          setInput={setInput}
          generateQR={generateQR}
          codeArray={codeArray}
          resetAll={resetAll}
          qrSize={qrSize}
          setQrSize={setQrSize}
        />
        <QRgrid codeArray={codeArray} qrSize={qrSize} />
      </div>
      <Footer />
    </>
  );
}

export default App;
