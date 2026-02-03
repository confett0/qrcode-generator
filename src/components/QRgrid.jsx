import QRCodeCard from './QRCodeCard';

export default function QRgrid({ codeArray, qrSize }) {

    const printWidth = 210 // mm
    const printMargin = 10
    const columnNum = Math.floor((printWidth - printMargin * 2) / qrSize) // calculate number of columns for preview
    const qrCodeElements = codeArray.map((code, index) => <QRCodeCard key={`${code}-${index}`} code={code} />)

    return <div className="qr-grid" style={{ '--qr-size': `${qrSize}mm`, '--column-num': `${columnNum}` }}>
        {qrCodeElements}
    </div>
}