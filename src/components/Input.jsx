export default function Input({ input, setInput }) {
    return (
        <textarea name="input" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
    )
}