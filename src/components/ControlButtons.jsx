import { FiPrinter } from "react-icons/fi"
import { MdOutlineRestartAlt } from "react-icons/md"

export default function ControlButtons({ resetAll }) {

    const handlePrint = () => window.print()

    return (
        <div className="control-button-container">
            <button className="print-button" onClick={handlePrint}>
                <FiPrinter aria-hidden />
                Stampa
            </button>
            <button className="reset-button" onClick={resetAll}>
                <MdOutlineRestartAlt aria-hidden />
                Nuovo foglio
            </button>
        </div>
    )
}