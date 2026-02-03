import QRCodeCard from './QRCodeCard';

export default function QRgrid({ codeArray, qrSize }) {

    const qrCodeElements = codeArray.map((code, index) => <QRCodeCard key={`${code}-${index}`} code={code} />)

    return <div className="qr-grid" style={{ '--qr-size': `${qrSize}mm` }}>
        {qrCodeElements}
    </div>
}