export default function ControlButtons({resetAll}) {

    const handlePrint = () => window.print()

    return (
        <div className="control-button-container">
            <button className="print-button" onClick={handlePrint}>
                Stampa
            </button>
            <button className="reset-button" onClick={resetAll}>Nuovo foglio</button>
        </div>
    )
}