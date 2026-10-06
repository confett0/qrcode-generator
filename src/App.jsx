import { useState } from "react";
import Sidebar from "./components/Sidebar";
import QRgrid from "./components/QRgrid";
import Footer from "./components/Footer";
import inputParser from "./inputParser";
import INITIAL_SETTINGS from "./initialSettings";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [codeArray, setCodeArray] = useState([]);
  const [gridSettings, setGridSettings] = useState(INITIAL_SETTINGS);

  const generateQR = (e) => {
    e.preventDefault();
    setCodeArray(inputParser(input));
  };

  const handleChange = (e) => {
    setGridSettings((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const resetAll = () => {
    setInput("");
    setCodeArray([]);
    setGridSettings(INITIAL_SETTINGS);
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
          gridSettings={gridSettings}
          handleChange={handleChange}
        />
        <QRgrid codeArray={codeArray} settings={gridSettings} />
      </div>
      <Footer />
    </>
  );
}

export default App;
