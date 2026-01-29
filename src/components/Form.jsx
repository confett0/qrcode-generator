export default function Form({ input, setInput, generateQR }) {
    return (
        <form onSubmit={generateQR}>
            <textarea name="input" placeholder="Inserisci un codice per riga" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <button type="submit">Genera QR</button>
        </form>
    )
}