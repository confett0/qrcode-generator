export default function Form({ input, setInput, generateQR }) {
    return (
        <form onSubmit={generateQR}>
            <textarea name="input" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <button type="submit">Genera QR</button>
        </form>
    )
}