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
      <textarea
        name="input"
        placeholder="O1-SSB-1-1-0-0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
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
      <label htmlFor="title">Inserisci titolo pagina (opzionale)</label>
      <input
        type="text"
        id="title"
        name="title"
        className="title-input"
        value={title}
        onChange={handleChange}
      />
      <fieldset>
        <legend>Direzione</legend>
        <label htmlFor="direction-row">Orizzontale</label>
        <input
          type="radio"
          name="flexDirection"
          id="direction-row"
          value="row"
          checked={flexDirection === "row"}
          onChange={handleChange}
        />
        <label htmlFor="direction-column">Verticale</label>
        <input
          type="radio"
          name="flexDirection"
          id="direction-column"
          value="column"
          checked={flexDirection === "column"}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Gap</legend>
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
      </fieldset>
      <button type="submit">
        <IoQrCodeOutline aria-hidden />
        Genera QR
      </button>
    </form>
  );
}
