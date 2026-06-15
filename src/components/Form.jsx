import { IoQrCodeOutline } from "react-icons/io5";
import { IoMdSettings, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OptionalSettings from "./OptionalSettings";
import { useState } from "react";

export default function Form({
  input,
  setInput,
  generateQR,
  gridSettings,
  handleChange,
}) {
  const [showOptionalSettings, setShowOptionalSettings] = useState(false);
  const { qrSize } = gridSettings;
  const toggleSettings = () => setShowOptionalSettings((prev) => !prev);
  return (
    <form onSubmit={generateQR}>
      <fieldset>
        <label htmlFor="textarea">Inserisci un codice per riga</label>
        <textarea
          id="textarea"
          name="input"
          placeholder="O1-SSB-1-1-0-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </fieldset>
      <fieldset>
        <label htmlFor="qr-size">Seleziona la dimensione dei QR code:</label>
        <div className="range-input-container">
          <input
            type="range"
            id="qr-size"
            name="qrSize"
            value={qrSize}
            min="25"
            max="40"
            step="5"
            onChange={handleChange}
          />
          <output>{qrSize}mm</output>
        </div>
      </fieldset>
      <button
        type="button"
        className="settings-button"
        onClick={toggleSettings}
      >
        <IoMdSettings aria-hidden /> Altre impostazioni
        {showOptionalSettings ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {showOptionalSettings && (
        <OptionalSettings
          gridSettings={gridSettings}
          handleChange={handleChange}
        />
      )}
      <button type="submit">
        <IoQrCodeOutline aria-hidden />
        Genera QR
      </button>
    </form>
  );
}
