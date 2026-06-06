import { IoQrCodeOutline } from "react-icons/io5";

export default function Form({
  input,
  setInput,
  generateQR,
  gridSettings,
  handleChange,
}) {
  const { qrSize, title } = gridSettings;
  return (
    <form onSubmit={generateQR}>
      <textarea
        name="input"
        placeholder="O1-SSB-1-1-0-0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <fieldset>
        <label htmlFor="qr-size">
          Seleziona la dimensione di stampa dei QR code:
        </label>
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
      <label>
        Inserisci titolo pagina (opzionale)
        <input
          type="text"
          name="title"
          className="title-input"
          value={title}
          onChange={handleChange}
        />
      </label>
      <button type="submit">
        <IoQrCodeOutline aria-hidden />
        Genera QR
      </button>
    </form>
  );
}
