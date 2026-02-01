import { IoQrCodeOutline } from "react-icons/io5";

export default function Form({ input, setInput, generateQR }) {
    return (
        <form onSubmit={generateQR}>
            <textarea name="input" placeholder="O1-SSB-1-1-0-0" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <button type="submit">
                <IoQrCodeOutline aria-hidden />
                Genera QR
            </button>
        </form>
    )
}