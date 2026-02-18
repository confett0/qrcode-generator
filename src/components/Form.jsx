import { IoQrCodeOutline } from "react-icons/io5";

export default function Form({
  input,
  setInput,
  generateQR,
  qrSize,
  setQrSize,
  title,
  setTitle,
}) {
  return (
    <form onSubmit={generateQR}>
      <textarea
        name="input"
        placeholder="O1-SSB-1-1-0-0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <fieldset>
        <legend>Seleziona la dimensione di stampa dei QR code:</legend>
        <label>
          <input
            type="radio"
            id="20mm"
            name="qr-size"
            value={26}
            checked={qrSize === 26}
            onChange={(e) => setQrSize(+e.target.value)}
          />
          20mm
        </label>
        <label>
          <input
            type="radio"
            id="35mm"
            name="qr-size"
            value={40}
            checked={qrSize === 40}
            onChange={(e) => setQrSize(+e.target.value)}
          />
          35mm
        </label>
      </fieldset>
      <label>
        Titolo pagina (opzionale)
        <input
          type="text"
          name="title"
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button type="submit">
        <IoQrCodeOutline aria-hidden />
        Genera QR
      </button>
    </form>
  );
}
