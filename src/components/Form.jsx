import { IoQrCodeOutline } from "react-icons/io5";

export default function Form({ input, setInput, generateQR, qrSize, setQrSize }) {

    const handleChange = (e) => setQrSize(+e.target.value)

    return (
        <form onSubmit={generateQR}>
            <textarea name="input" placeholder="O1-SSB-1-1-0-0" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <fieldset>
                <legend>Seleziona la dimensione di stampa dei QR code:</legend>
                <label><input type="radio" id="20mm" name="qr-size" value={25} checked={qrSize === 25} onChange={handleChange} />20mm</label>
                <label><input type="radio" id="40mm" name="qr-size" value={45} checked={qrSize === 45} onChange={handleChange} />40mm</label>
            </fieldset>
            <button type="submit">
                <IoQrCodeOutline aria-hidden />
                Genera QR
            </button>
        </form>
    )
}