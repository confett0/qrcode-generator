import { IoQrCodeOutline } from "react-icons/io5";

export default function Form({
  input,
  setInput,
  generateQR,
  gridSettings,
  handleChange,
}) {
  const { qrSize, title, flexDirection, rowGap, columnGap } = gridSettings;
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
      <fieldset>
        <label htmlFor="title">Inserisci titolo pagina (opzionale)</label>
        <input
          type="text"
          id="title"
          name="title"
          className="title-input"
          value={title}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Direzione</legend>
        <div className="direction-selector-container">
          <div className="direction-input">
            <label htmlFor="direction-row">Orizzontale</label>
            <input
              type="radio"
              name="flexDirection"
              id="direction-row"
              value="row"
              checked={flexDirection === "row"}
              onChange={handleChange}
            />
          </div>
          <div className="direction-input">
            <label htmlFor="direction-column">Verticale</label>
            <input
              type="radio"
              name="flexDirection"
              id="direction-column"
              value="column"
              checked={flexDirection === "column"}
              onChange={handleChange}
            />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Gap</legend>
        <div className="gap-selector-container">
          <div>
            <label htmlFor="row-gap">Righe</label>
            <input
              type="range"
              id="row-gap"
              name="rowGap"
              value={rowGap}
              min="0"
              max="3"
              step="0.5"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="column-gap">Colonne</label>
            <input
              type="range"
              id="column-gap"
              name="columnGap"
              value={columnGap}
              min="0"
              max="3"
              step="0.5"
              onChange={handleChange}
            />
          </div>
        </div>
      </fieldset>
      <button type="submit">
        <IoQrCodeOutline aria-hidden />
        Genera QR
      </button>
    </form>
  );
}
