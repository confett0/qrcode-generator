import { useState } from "react";
import Sidebar from "./components/Sidebar";
import QRgrid from "./components/QRgrid";
import Footer from "./components/Footer";
import inputParser from "./inputParser";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [codeArray, setCodeArray] = useState([]);
  const [gridSettings, setGridSettings] = useState({
    qrSize: 25, // mm
    rowGap: 0,
    columnGap: 0,
    flexDirection: "row",
    title: "",
    backgroundColor: "white",
  });

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
